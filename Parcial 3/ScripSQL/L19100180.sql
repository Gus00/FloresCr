CREATE database L19100180;
use L19100180;

create table COMPRADOR 
(
id_Comprador smallint auto_increment,
nombre varchar(30),
apellidoMaterno varchar(30),
apellidoPaterno varchar(30),
numeroTelefono varchar(12),
correoElectronico varchar(50),
TipoBoleto varchar(10),
asientoEspecial varchar(6),
constraint PK_ID_COMPRADOR primary key (id_Comprador)
);


insert into comprador values(null,'David','Castillo','Tellez','867464532','correo@gmail.com','VIP','No');
insert into comprador values(null,'Ludwing','Oliva','Perea','867685345','ludwingdaniel.op@nlaredo.tecnm.mx','Normal','No');

