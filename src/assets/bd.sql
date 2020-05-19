CREATE TABLE IF NOT EXISTS pokemon (idPoke INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, tipo1 TEXT NOT NULL, tipo2 TEXT, usePercent REAL NOT NULL, img TEXT);
INSERT or IGNORE INTO pokemon VALUES (1, 'Dragapult', 'Dragon', 'Fantasma', 38.39, 'assets/img/dragapult.png');
INSERT or IGNORE INTO pokemon VALUES (2, 'Arcanine', 'Fuego', '', 24.54, 'assets/Img/arcanine.png');
INSERT or IGNORE INTO pokemon VALUES (3, 'Milotic', 'Agua', '', 16.50, 'assets/Img/milotic.png');
INSERT or IGNORE INTO pokemon VALUES (4, 'Primarina', 'Agua', 'Hada', 13.18, 'assets/img/primarina.png');
INSERT or IGNORE INTO pokemon VALUES (5, 'Corviknight', 'Volador', 'Acero', 12.51, 'assets/img/corviknight.png');
INSERT or IGNORE INTO pokemon VALUES (6, 'Indeedee-F', 'Psiquico', 'Normal', 10.19, 'assets/img/indeedee.png');
INSERT or IGNORE INTO pokemon VALUES (7, 'Braviary', 'Volador', 'Normal', 6.90, 'assets/img/braviary.png');
INSERT or IGNORE INTO pokemon VALUES (8, 'Bisharp', 'Acero', 'Siniestro', 3.29, 'assets/img/bisharp.png');
INSERT or IGNORE INTO pokemon VALUES (9, 'Passimian', 'Lucha', '', 1.46, 'assets/img/passimian.png');