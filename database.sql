\! cls;
DROP DATABASE IF EXISTS emis_system;
CREATE DATABASE emis_system;
USE emis_system;
CREATE TABLE student(sid INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(20) UNIQUE, phone VARCHAR(14) UNIQUE, area VARCHAR(20), city VARCHAR(20), state VARCHAR(20), pin VARCHAR(6), password VARCHAR(50), roll VARCHAR(10) DEFAULT 'student');

CREATE TABLE tenth (sid INT, school VARCHAR(100), board VARCHAR(20), marks DOUBLE, p_year DATE, marksheet VARCHAR(100), FOREIGN KEY (sid) REFERENCES student(sid));

CREATE TABLE twelfth (sid INT, school VARCHAR(100), board VARCHAR(20), marks DOUBLE, p_year DATE, marksheet VARCHAR(100), FOREIGN KEY (sid) REFERENCES student(sid));

CREATE TABLE deploma (sid INT, institute VARCHAR(100), university VARCHAR(20), marks DOUBLE, p_year DATE, marksheet VARCHAR(100), FOREIGN KEY (sid) REFERENCES student(sid));

CREATE TABLE engg (sid INT, institute VARCHAR(100), university VARCHAR(20), marks DOUBLE, p_year DATE, marksheet VARCHAR(100), FOREIGN KEY (sid) REFERENCES student(sid));

CREATE TABLE attendance ( aid INT PRIMARY KEY AUTO_INCREMENT, adate DATE, sid INT, status varchar(7), FOREIGN KEY(sid) REFERENCES student(sid) );

CREATE TABLE student_marks ( mid INT PRIMARY KEY AUTO_INCREMENT, sid INT, subject VARCHAR(80), theory INT, internal INT, lab INT, outof INT, FOREIGN KEY(sid) REFERENCES student(sid) );

CREATE TABLE student_schedule ( shid INT PRIMARY KEY AUTO_INCREMENT, sdate DATE, edate DATE, module VARCHAR(80), starts VARCHAR(8), ends VARCHAR(8), duration VARCHAR(10) );

CREATE TABLE announcement (aid INT PRIMARY KEY AUTO_INCREMENT, content VARCHAR(200));

CREATE TABLE faculty (fid INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(20) UNIQUE, phone VARCHAR(14) UNIQUE, designation VARCHAR(30) ,area VARCHAR(20), city VARCHAR(20), state VARCHAR(20), pin VARCHAR(6), password VARCHAR(50), roll VARCHAR(10) DEFAULT 'faculty');

CREATE TABLE faculty_schedule (scid INT PRIMARY KEY AUTO_INCREMENT, fid INT, sdate DATE, edate DATE, module VARCHAR(80), batch VARCHAR(10), starts VARCHAR(8), ends VARCHAR(8), duration VARCHAR(10), FOREIGN KEY(fid) REFERENCES faculty(fid) );

CREATE TABLE faculty_modules (mid INT PRIMARY KEY AUTO_INCREMENT, fid INT, name VARCHAR(80), total_hours INT, completed_hours INT, status VARCHAR(15) );

-- dummy records

INSERT INTO student VALUES(0, 'John Snow', 'john@winterfell.com', '8876543210', 'South of the wall', 'Castle Ward', 'Winterfell', '654321', 'snow', 'student');
INSERT INTO student VALUES(0, 'Dobby Elf', 'dobby@hogs.com', '9876543211', 'Malfoy Manner', 'Wiltshire', 'London', '654321', 'dobby', 'student');
INSERT INTO student VALUES(0, 'Arya Stark', 'arya@winterfell.com', '9876543212', 'HouseOfBlack&White', 'Bravos', 'Westeors', '654321', 'arya', 'student');
INSERT INTO student VALUES(0, 'Harry Potter', 'harry@hogs.com', '9876543213', 'Number 4', 'Private Drive', 'London', '654321', 'harry', 'student');
INSERT INTO student VALUES(0, 'Ronnald Weasly', 'ron@hogs.com', '9876543214', 'The Burrow', 'Devon', 'West Country England', '654321', 'ron', 'student');
INSERT INTO student VALUES(0, 'Tom Riddle', 'voldy@hogs.com', '9876543215', 'Near albanian river', 'Deep forest', 'Albenia', '654321', 'voldy', 'student');
INSERT INTO student VALUES(0, 'Eren Yeager', 'eren@titan.com', '9876543216', 'Behind Wall Maria', 'Shiganshina', 'Paradise', '654321', 'eren', 'student');
INSERT INTO student VALUES(0, 'Mikasa Ackerman', 'mikasa@titan.com', '9876543217', 'Behind Wall Maria', 'Shiganshina', 'Paradise', '654321', 'mikasa', 'student');
INSERT INTO student VALUES(0, 'Levi Ackerman', 'levi@titan.com', '9876543218', 'with survey corps', 'Wall Maria', 'Paradise', '654321', 'levi', 'student');
INSERT INTO student VALUES(0, 'Light Yagami', 'light@death.com', '9876543219', 'House 12', 'Kanto', 'Tokyo', '654321', 'light', 'student');
INSERT INTO student VALUES(0, 'Luke Skywalker', 'luke@star.com', '9876543200', 'Lars Farm', 'Farm', 'Tatooine', '654321', 'luke', 'student');
INSERT INTO student VALUES(0, 'Obi Wan Kanobi', 'obiwan@star.com', '9876543201', 'Near Lars Farm', 'Farm', 'Tatooine', '654321', 'obi', 'student');


INSERT INTO faculty VALUES(0, 'Eddard Stark', 'ned@gmail.com', '1212121252', 'Admin', 'South of the wall', 'Castle Ward', 'Winterfell', '654321', 'ned', 'admin');
INSERT INTO faculty VALUES(0, 'Dumbledore', 'ddore@hogs.com', '1212121212', 'Headmaster', 'Hogwarts', 'Hogsmead', 'London', '654321', 'ddore', 'faculty');
INSERT INTO faculty VALUES(0, 'Remus Lupin', 'remus@hogs.com', '2121212112', 'Teacher', 'Number 12', 'Grimmauld Place', 'london', '654321', 'remus', 'faculty');
INSERT INTO faculty VALUES(0, 'Erwin Smith', 'erwin@titan.com', '1254145254', 'Teacher', 'with survey corps', 'Wall Maria', 'Paradise', '654321', 'erwin', 'faculty');
INSERT INTO faculty VALUES(0, 'Master Yoda', 'yoda@star.com', '1254185254', 'Teacher', 'in black swamp', 'swamp planet', 'Dagobah', '654321', 'yoda', 'faculty');
INSERT INTO faculty VALUES(0, 'Severus Snape', 'snape@hogs.com', '5454545454', 'teacher', 'Cokeworth', 'England', 'Great Britain', '654321', 'snape', 'faculty');


INSERT INTO faculty_modules VALUES (0, 2, 'Java', 60, 20, 'partially' );
INSERT INTO faculty_modules VALUES (0, 3, 'Database Technologies', 50, 12, 'partially' );
INSERT INTO faculty_modules VALUES (0, 4, 'Web Programming Technologies', 40, 4, 'partially' );
INSERT INTO faculty_modules VALUES (0, 4, 'React Front End Dev', 50, 50, 'complete' );
INSERT INTO faculty_modules VALUES (0, 5, 'Advanced Java', 60, 8, 'partially' );
INSERT INTO faculty_modules VALUES (0, 6, 'Data Structures', 30, 30, 'Complete' );


INSERT INTO faculty_schedule VALUES (0, 2, '2021-05-05', '2021-05-12', 'JAVA', 'DAC', '09:00 AM', '01:00 PM', '04 Houres' );
INSERT INTO faculty_schedule VALUES (0, 3, '2021-05-05', '2021-05-12', 'Database Technologies', 'DBDA', '08:00 AM', '10:00 PM', '02 Houres' );
INSERT INTO faculty_schedule VALUES (0, 3, '2021-05-05', '2021-05-12', 'Database Technologies', 'DMC', '11:00 AM', '01:00 PM', '02 Houres' );
INSERT INTO faculty_schedule VALUES (0, 4, '2021-05-05', '2021-05-12', 'Web Programming Technologies', 'DAC', '09:00 AM', '01:00 PM', '04 Houres' );
INSERT INTO faculty_schedule VALUES (0, 5, '2021-05-05', '2021-05-12', 'Advanced Java', 'DAC', '09:00 AM', '01:00 PM', '04 Houres' );
INSERT INTO faculty_schedule VALUES (0, 6, '2021-05-05', '2021-05-12', 'Data Structures', 'DAC', '09:00 AM', '01:00 PM', '04 Houres' );

INSERT INTO student_marks VALUES (0, 1, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 1, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 1, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 1, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 1, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 2, 'JAVA', 30, 30, 30, 100 );
INSERT INTO student_marks VALUES (0, 2, 'Database Technologies', 30, 30, 30, 100 );
INSERT INTO student_marks VALUES (0, 2, 'Web Programming Technologies', 30, 30, 30, 100 );
INSERT INTO student_marks VALUES (0, 2, 'Advanced Java', 30, 30, 30, 100 );
INSERT INTO student_marks VALUES (0, 2, 'Data Structures', 30, 30, 30, 100 );
 
INSERT INTO student_marks VALUES (0, 3, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 3, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 3, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 3, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 3, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 4, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 4, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 4, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 4, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 4, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 5, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 5, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 5, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 5, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 5, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 6, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 6, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 6, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 6, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 6, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 7, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 7, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 7, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 7, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 7, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 8, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 8, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 8, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 8, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 8, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 9, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 9, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 9, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 9, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 9, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 10, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 10, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 10, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 10, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 10, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 11, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 11, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 11, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 11, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 11, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_marks VALUES (0, 12, 'JAVA', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 12, 'Database Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 12, 'Web Programming Technologies', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 12, 'Advanced Java', 20, 20, 40, 100 );
INSERT INTO student_marks VALUES (0, 12, 'Data Structures', 20, 20, 40, 100 );
 
INSERT INTO student_schedule VALUES ( 0,  '2021-05-05', '2021-05-12', 'Data Structures', '09:00 AM', '01:00 PM', '04 Houres');

CREATE TABLE student_photos(sid INT UNIQUE, photo VARCHAR(100));