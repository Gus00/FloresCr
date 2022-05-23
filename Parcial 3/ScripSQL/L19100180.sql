CREATE database L19100180;
use L19100180;

create table COMPRADOR 
(
nombre varchar(30),
apellidoMaterno varchar(30),
apellidoPaterno varchar(30),
numeroTelefono varchar(12),
correoElectronico varchar(50),
TipoBoleto varchar(10),
asientoEspecial varchar(6)
);


insert into comprador values('David','Castillo','Tellez','867464532','correo@gmail.com','VIP','No');
insert into comprador values('Ludwing','Oliva','Perea','867685345','ludwingdaniel.op@nlaredo.tecnm.mx','Normal','No');

