# PokeWiki
La aplicación se basará en un sistema de  almacenamiento de información  sobre los datos de los diferentes pokémon pertenecientes a la famosa franquicia. 

La plataforma tendrá un sistema de login y registro, de tal forma que se accederá a la plataforma usando un usuario y contraseña. Tras esto, se podrá acceder a un menú donde habrá una serie de páginas y distintas funcionalidades. Podrás registrar un nuevo Pokemon si la lista está vacía, borrarlo, añadirlo a tu equipo personal u obtener información si haces click en él.

## Autores
* **David Gómez** - *Desarrollador* - [DabvidGmezHdez](https://github.com/davidgmezhdez)
* **José Miguel Jerónimo** - *Desarrollador* - [Chemita1728](https://github.com/Chemita1728)

### Instalación 🔧
Para empezar a realizar el trabajo primero instalamos todos los programas requeridos:
1.Descargamos node.js para poder instalar cordova e ionic en la propia página web de node.js

2.Una vez instalado node.js podremos ejecutar el comando siguiente que instalará cordova::
	$ npm install -g cordova

3.Ya instalado cordova instalamos ionic con el comando:
	$ npm install -g ionic

4. Ahora descomprimimos el zip adjunto

5. Ahora necesitamos instalar el servicio de storage y las dependencias
	$ npm install
  $ ionic cordova plugin add cordova-sqlite-storage
  $ npm install --save @ionic/storage

6. Por último, copiamos los archivos que hay del zip en la carpeta y reemplazamos. Con eso debería funcionar. Para inicializar el servicio escribimos 
  $ ionic serve

## Construido con 🛠️
* [Ionic](https://ionicframework.com)
* [Angular](https://angular.io)
* [Cordova](https://cordova.apache.org)
* [PokeAPI](https://pokeapi.co)

Todos los nombres e imágenes pertenecen a ThePokemonCompany
