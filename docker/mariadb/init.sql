DROP DATABASE IF EXISTS LinkManager;
CREATE DATABASE LinkManager;

USE LinkManager;

CREATE TABLE link(
    LinkID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    url varchar(500) NOT NULL
);

INSERT INTO link (LinkID, name, url)
VALUES (null,"google","google.com"); 

INSERT INTO link (LinkID, name, url)
VALUES (null,"firefox","firefox.com");

CREATE TABLE tag(
    TagID int NOT NULL AUTO_INCREMENT,
    name varchar(255) UNIQUE,
    PRIMARY KEY (TagID) 
);

INSERT INTO tag (name)
VALUES ("search engine");

INSERT INTO tag (name)
VALUES ("malware");

CREATE TABLE linktag(
    LinkID int NOT NULL,
    TagID int NOT NULL,
    PRIMARY KEY (LinkID, TagID),

    CONSTRAINT `fk_link_id`
    FOREIGN KEY (LinkID) REFERENCES link(LinkID)
    ON DELETE CASCADE
    ON UPDATE RESTRICT,

    CONSTRAINT `fk_tag_id`
    FOREIGN KEY (TagID) REFERENCES tag(TagID)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

INSERT INTO linktag (LinkID,TagID)
VALUES (1,1);

INSERT INTO linktag (LinkID,TagID)
VALUES (2,1);

INSERT INTO linktag (LinkID,TagID)
VALUES (1,2);

/*

All tags for single link
--
SELECT tag.name 
  FROM tag 
  JOIN linktag ON tag.TagID = linktag.TagID
 WHERE linktag.LinkID = 1;

Tags cloud
--
SELECT tag.name, count(*)
  FROM tag
  JOIN linktag ON tag.TagID = linktag.TagID
 GROUP BY tag.name;

All items with such tag
--
SELECT link.*
  FROM link
  JOIN linktag ON link.LinkID = linktag.LinkID
  JOIN tag ON linktag.TagID = tag.TagID
 WHERE tag.name = 'malware'; 
*/