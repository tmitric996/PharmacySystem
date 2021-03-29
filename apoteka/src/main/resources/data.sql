-- Lozinke su hesovane pomocu BCrypt algoritma https://www.dailycred.com/article/bcrypt-calculator
-- Lozinka za oba user-a je 123
INSERT INTO AUTHORITY (name) VALUES ('ROLE_PATIENT');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_PHARMACIST');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_DERMATOLOGIST');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_PHARMACY_ADMIN');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_SUPPLIER');
INSERT INTO AUTHORITY (name) VALUES ('ROLE_SYSTEM_ADMIN');

--pacijenti
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milica', 'Visekruna', 'patient1@example.com', 'Gavrila Principa 6', 'Backa Palanka', 'Srbija', '0649477321', true, '2020-12-17', 1, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Visnja', 'Visic', 'patient2@example.com', 'Jozef Atila 6', 'Novi Sad', 'Srbija', '0648796562', true, '2020-12-17', 1, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jovana', 'Jovic', 'patient3@example.com', 'Prvomajska 12', 'Novi Sad', 'Srbija', '0649477777', true, '2020-12-17', 1, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jovan', 'Jovanovic', 'patient4@example.com', 'Gospodara Vucica 26', 'Beograd', 'Srbija', '062122122', true, '2020-12-17', 1, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Petar', 'Peric', 'patient5@example.com', 'Savska 44b', 'Backa Palanka', 'Srbija', '0613659898', true, '2020-12-17', 1, true);
--farmaceuti
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Bojan', 'Bojanic', 'pharmacist1@example.com', 'Savska 12', 'Backa Palanka', 'Srbija', '0649876545', true, '2020-12-17', 2, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Bojana', 'Bojovic', 'pharmacist2@example.com', 'Ive Lole Ribara bb', 'Novi Sad', 'Srbija', '0644445555', true, '2020-12-17', 2, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Branislav', 'Branic', 'pharmacist3@example.com', 'Svetozara Miletica 33', 'Beograd', 'Srbija', '0636549896', true, '2020-12-17', 2, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Dejan', 'Dragic', 'pharmacist4@example.com', 'Glavna 13', 'Ruma', 'Srbija', '0627845454', true, '2020-12-17', 2, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Goran', 'Gavrilovic', 'pharmacist5@example.com', 'Nikole Tesle 42', 'Sremska Mitrovica', 'Srbija', '0649876545', true, '2020-12-17', 2, true);
--dermatolozi
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Bojana', 'Srdic', 'dermatologist1@example.com', 'Ive Lole Ribara 41', 'Ruma', 'Srbija', '066787556', true, '2020-12-17', 3, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Zoran', 'Zoric', 'dermatologist2@example.com', 'Stari sor 21a', 'Ruma', 'Srbija', '066784444', true, '2020-12-17', 3, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jasmina', 'Ivanic', 'dermatologist3@example.com', 'Kuzminska 51', 'Sremska Mitrovica', 'Srbija', '064442556', true, '2020-12-17', 3, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Gorica', 'Stamenkovic', 'dermatologist4@example.com', 'Parobrodska 1', 'Novi Sad', 'Srbija', '062221556', true, '2020-12-17', 3, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Stefan', 'Jovic', 'dermatologist5@example.com', 'nNovosadska 21', 'Smederevo', 'Srbija', '066548556', true, '2020-12-17', 3, true);
--admini apoteka
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sanja', 'Polovina', 'pharmacyadmin1@example.com', 'Marka Miljanova 7', 'Ruma', 'Srbija', '0612489656', true, '2020-12-17', 4, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sanja', 'Vucic', 'pharmacyadmin2@example.com', 'Glavna 76', 'Ruma', 'Srbija', '0612487777', true, '2020-12-17', 4, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Aleksandar', 'Andonovic', 'pharmacyadmin3@example.com', 'Vodna 47', 'Novi Sad', 'Srbija', '0613689656', true, '2020-12-17', 4, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Marko', 'Kulic', 'pharmacyadmin4@example.com', 'Parobrodska 87', 'Sremska Mitrovica', 'Srbija', '067779656', true, '2020-12-17', 4, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milica', 'Popovic', 'pharmacyadmin5@example.com', 'Zmaj Jovica 5', 'Sid', 'Srbija', '062589656', true, '2020-12-17', 4, true);
--dobavljaci
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Jasna', 'Popovic', 'supplier1@example.com', 'Marka Miljanova 41', 'Ruma', 'Srbija', '0612481156', true, '2020-12-17', 5, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Djordje', 'Rajic', 'supplier2@example.com', 'Rumenacka 43', 'NoviSad', 'Srbija', '0678566656', true, '2020-12-17', 5, true);
--admini sistema
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Miroslav', 'Ilic', 'admin1@example.com', 'Savska 78', 'Beograd', 'Srbija', '0674568522', true, '2020-12-17', 6, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Svetlana', 'Raznatovic', 'admin2@example.com', 'Svetozara Miletica 37', 'Beograd', 'Srbija', '0674568566', true, '2020-12-17', 6, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Ana', 'Bekuta', 'admin3@example.com', 'Gunduliceva 15', 'Novi Sad', 'Srbija', '0674568512', true, '2020-12-17', 6, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Sinan', 'Sakic', 'admin4@example.com', 'Prvomajska 64', 'Sremska Mitrovica', 'Srbija', '0674568521', true, '2020-12-17', 6, false);
INSERT INTO USERS (password, first_name, last_name, email, home_address, city, state, phone_number,  enabled, last_password_reset_date, authority_id, first_login) VALUES ('$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Milan', 'Petrovic', 'admin5@example.com', 'Gavrila Principa 7', 'Beograd', 'Srbija', '0674568511', true, '2020-12-17', 6, true);


INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (2, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (3, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (4, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (5, 1);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (6, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (7, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (8, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (9, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (10, 2);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (11, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (12, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (13, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (14, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (15, 3);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (16, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (17, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (18, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (19, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (20, 4);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (21, 5);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (22, 5);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (23, 6);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (24, 6);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (25, 6);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (26, 6);
INSERT INTO USER_AUTHORITY (user_id, authority_id) VALUES (27, 6);


--lekovi
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Bensedin', '100', '3', true, 'Ksalol', 'tableta');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Ksalol', '101', '3', true, 'Bensedin', 'tableta');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Brufen', '102', '1', false, 'Baralgin', 'prasak');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Baralgin', '103', '1', false, 'Brufen', 'tableta');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Aspirin', '104', '2', false, '', 'tableta');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Hemomicin', '105', '3', true, 'Amoksiciklin', 'kapsula');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Amoksiciklin', '106', '3', true, 'Hemomicin', 'kapsula');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Espumisan', '107', '2', false, '', 'kapsula');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Ranisol', '108', '1', false, '', 'prasak');
INSERT INTO MEDICINE (name, code, daily_intake, prescriptio_required, replacments, type) VALUES ('Aciklovir', '109', '4', true, '', 'mast');

--alergije 
insert into allergies (medicine_name, patient_email) values ('Ksalol', 'patient1@example.com');
insert into allergies (medicine_name, patient_email) values ('Aciklovir', 'patient1@example.com');
insert into allergies (medicine_name, patient_email) values ('Hemomicin', 'patient2@example.com');

--apoteke
insert into pharmacy (address, description, phone, name, price_for_counseling) values ('Dositeja Obradovica 14', 'Privatna klinika', '069223221', 'Prva Apoteka', 2200);
insert into pharmacy (address, description, phone, name, price_for_counseling) values ('Gunduliceva 41', 'Privatna klinika', '066552221', 'Druga Apoteka', 2000);
insert into pharmacy (address, description, phone, name, price_for_counseling) values ('Strazilovska 14', 'Privatna klinika', '021285321', 'Helthmedica', 3200);
insert into pharmacy (address, description, phone, name, price_for_counseling) values ('200 Kaplara 6', 'Privatna klinika', '021777221', 'Atlas', 3000);
insert into pharmacy (address, description, phone, name, price_for_counseling) values ('Narodnog Fronta 43', 'Privatna klinika', '02123221', 'MedioCentar', 2500);

--lekovi u apotekama
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (1, 1);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (1, 2);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (1, 3);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (1, 4);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (1, 5);

insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 1);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 2);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 3);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 4);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 5);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (2, 6);

insert into pharmacy_medicine (pharmacy_id, medicine_id) values (3, 1);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (3, 2);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (3, 6);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (3, 7);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (3, 8);

insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 1);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 2);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 3);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 4);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 7);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 8);
insert into pharmacy_medicine (pharmacy_id, medicine_id) values (4, 9);

--farmaceuti u apotekama 
insert into pharmacy_pharmacists (pharmacy_id, pharmacists_id) values (1, 6);
insert into pharmacy_pharmacists (pharmacy_id, pharmacists_id) values (2, 7);
insert into pharmacy_pharmacists (pharmacy_id, pharmacists_id) values (3, 8);
insert into pharmacy_pharmacists (pharmacy_id, pharmacists_id) values (4, 9);
insert into pharmacy_pharmacists (pharmacy_id, pharmacists_id) values (5, 10);

--dermatolozi u apotekama
insert into pharmacy_dermatologist (pharmacy_id, dermatologist_id) values (1, 11);
insert into pharmacy_dermatologist (pharmacy_id, dermatologist_id) values (2, 12);
insert into pharmacy_dermatologist (pharmacy_id, dermatologist_id) values (3, 13);
insert into pharmacy_dermatologist (pharmacy_id, dermatologist_id) values (4, 14);
insert into pharmacy_dermatologist (pharmacy_id, dermatologist_id) values (5, 15);

--admini u apotekama 
insert into pharmacy_admin_apoteke (pharmacy_id, admin_apoteke_id) values (1, 16);
insert into pharmacy_admin_apoteke (pharmacy_id, admin_apoteke_id) values (2, 17);
insert into pharmacy_admin_apoteke (pharmacy_id, admin_apoteke_id) values (3, 18);
insert into pharmacy_admin_apoteke (pharmacy_id, admin_apoteke_id) values (4, 19);
insert into pharmacy_admin_apoteke (pharmacy_id, admin_apoteke_id) values (5, 20);

--kolicine lekova u apotekama 
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (1, 1, 1);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (1, 2, 11);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (1, 3, 10);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (1, 4, 4);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (1, 5, 11);

insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 1, 3);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 2, 20);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 3, 10);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 4, 11);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 5, 1);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (2, 6, 2);

insert into medicine_amount (pharmacy_id, medicine_id, amount) values (3, 1, 1);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (3, 2, 4);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (3, 6, 2);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (3, 7, 3);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (3, 8, 21);

insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 1, 15);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 2, 20);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 3, 6);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 4, 4);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 7, 2);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 8, 5);
insert into medicine_amount (pharmacy_id, medicine_id, amount) values (4, 9, 21);

--pregledi i penali za pacijenta koji se nije pojavio na pregledu
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2020-12-17', true, false, 3000, '', 11, 1, 1);
insert into penalty (number_of_penalties, patient_id) values (1, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2020-12-17', false, false, 3000, '', 11, 1, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2020-12-18', false, true, 3000, 'izvestaj o pregledu', 11, 1, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 3000, 'nema zdravstvenih tegoba', 11, 2, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 2000, 'prepisana terapija', 11, 2, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20', false, false, 3000, '', 11, 3, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20 10', false, false, 2000, '', 11, 2, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20 12', false, false, 2000, '', 11, 1, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20 12:15', false, false, 2000, '', 11, 1, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-20 12:30', false, false, 2000, '', 11, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-20 13', false, false, 2000, '', 11, 1);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-20 14', false, false, 2000, '', 11, 1);

insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 3000, 'nema tegoba', 12, 2, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 2000, 'terapija', 12, 2, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20', false, false, 3000, '', 12, 3, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20 10', false, false, 2000, '', 12, 2, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-20 12', false, false, 2000, '', 12, 1, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-21 13', false, false, 2200, '', 12, 2);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-21 14', false, false, 2200, '', 12, 2);

insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-11', false, true, 3000, 'nema tegoba', 13, 2, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-11', false, true, 2000, 'terapija', 13, 2, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-22', false, false, 3000, '', 13, 3, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-22 10', false, false, 2000, '', 13, 4, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-22 12', false, false, 2000, '', 13, 1, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-25 13', false, false, 2200, '', 13, 3);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-25 14', false, false, 2200, '', 13, 3);

insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 3000, 'nema tegoba', 14, 2, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true, 2000, 'terapija', 14, 2, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-26', false, false, 3000, '', 14, 3, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-26 10', false, false, 2000, '', 14, 2, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, patient_id, pharmacy_id) values ('2021-02-26 12', false, false, 2000, '', 14, 1, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-27 13', false, false, 2200, '', 14, 4);
insert into examination (date_and_time, didnt_show, executed, price, report, dermatologist_id, pharmacy_id) values ('2021-02-27 14', false, false, 2200, '', 14, 4);

--savetovanja
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2020-01-17', false, true,   '',  6, 1, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2020-01-18', false, true,   'izvestaj o pregledu',  6, 1, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'nema zdravstvenih tegoba',  6, 2, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'prepisana terapija',  6, 2, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20', false, false,   '',  6, 3, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20 10', false, false,   '',  6, 2, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20  7', false, false,   '',  6, 1, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20  7:15', false, false,   '',  6, 1, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-20  7:30', false, false,   '',  6, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-20  8', false, false,   '',  6, 1);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-20  9', false, false,   '',  6, 1);

insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'nema tegoba',  7, 2, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'terapija',  7, 2, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20', false, false,   '',  7, 3, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20 10', false, false,   '',  7, 2, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-20  7', false, false,   '',  7, 1, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-21  8', false, false,   '',  7, 2);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-21  9', false, false,   '',  7, 2);

insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17 6', false, true,   'nema tegoba',  8, 2, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17 6', false, true,   'terapija',  8, 2, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-22', false, false,   '',  8, 3, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-22 10', false, false,   '',  8, 4, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-22  7', false, false,   '',  8, 1, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-25  8', false, false,   '',  8, 3);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-25  9', false, false,   '',  8, 3);

insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'nema tegoba',  9, 2, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-01-17', false, true,   'terapija',  9, 2, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-26', false, false,   '',  9, 3, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-26 10', false, false,   '',  9, 2, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, patient_id, pharmacy_id) values ('2021-02-26  7', false, false,   '',  9, 1, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-27  8', false, false,   '',  9, 4);
insert into counseling (date_and_time, didnt_show, executed,   report, pharmacist_id, pharmacy_id) values ('2021-02-27  9', false, false,   '',  9, 4);

--rezervacija leka(preuzeti)
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2020-12-12', true, 1, 1, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2020-12-12', true, 1, 2, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2020-12-12', true, 3, 1, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2020-12-12', true, 3, 2, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2020-12-12', true, 3, 1, 3);
--rezervacija leka -nisu preuzeti
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-03', false, 1, 1, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-03', false, 1, 2, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-04', false, 3, 1, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-04-05', false, 3, 2, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-02-20', false, 3, 1, 3);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-03', false, 1, 3, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-03', false, 1, 3, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-03-04', false, 3, 3, 2);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-04-05', false, 3, 3, 1);
insert into medicine_reservation (date_and_time, taken, medicine_id, patient_id, pharmacy_id) values ('2021-02-20', false, 3, 3, 3);

--zalba pacijenta na apoteku i na farmaceuta
insert into complaint (answer, answered, message, patient_id, pharmacy_id) values ('hvala na ulozenoj zalbi', true, 'nezadovoljan uslugom', 1, 1);
insert into complaint ( answered, message, patient_id, staff_id) values (false, 'nezadovoljan uslugom farmaceuta', 1, 6);
