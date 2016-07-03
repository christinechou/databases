DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE room (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE message (
  id int NOT NULL AUTO_INCREMENT,
  msg varchar(64) NOT NULL,
  userId int NOT NULL,
  roomId int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES user (id) ON UPDATE  NO ACTION  ON DELETE  CASCADE,  
  FOREIGN KEY (roomId) REFERENCES room (id) ON UPDATE  NO ACTION  ON DELETE  CASCADE
);


CREATE TABLE user_room (
  userId int NOT NULL,
  roomId int NOT NULL,
  FOREIGN KEY (userId) REFERENCES user (id) ON UPDATE  NO ACTION  ON DELETE  CASCADE,
  FOREIGN KEY (roomId) REFERENCES room (id) ON UPDATE  NO ACTION  ON DELETE  CASCADE
);

INSERT INTO user (name)
  VALUES ('christine');
INSERT INTO room (name)
  VALUES ('lobby');
INSERT INTO message (msg, userId, roomId)
  VALUES ('tgis!', (SELECT id FROM user WHERE name='christine'), (SELECT id FROM room WHERE name='lobby'));
INSERT INTO user_room (userId, roomId)
  VALUES ((SELECT id FROM user WHERE name='christine'), (SELECT id FROM room WHERE name='lobby'));

INSERT INTO user (name) VALUES ('christine');
INSERT INTO room (name) VALUES ('lobby');
INSERT INTO message (msg) VALUES ('tgis!');

INSERT INTO user (name) VALUES ('joe');
INSERT INTO room (name) VALUES ('lobby');
INSERT INTO message (msg) VALUES ('yolo!');

INSERT INTO user (name) VALUES ('christine');
INSERT INTO room (name) VALUES ('lobby');
INSERT INTO message (msg) VALUES ('partytime!');

INSERT INTO user (name) VALUES ('christine');
INSERT INTO room (name) VALUES ('lobby');
INSERT INTO message (msg) VALUES ('sushito!');
