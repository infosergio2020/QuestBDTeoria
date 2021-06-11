# QuestBDTeoria

requerimiento para poder ejecutar el proyecto sin problemas:
1) Tener instalado nodejs verifique con node --version, si no reconoce el comando puede instalar nodejs desde su ejecutable  --> https://nodejs.org/es/download/
2) Disponer del gestor de paquetes de node npm --> sudo apt-get install npm en windows por lo general viene con el instalador


Si intenta reutilizar este repo siga los siguientes pasos:

1) git clone https://github.com/infosergio2020/QuestBDTeoria.git
2) Una vez situado dentro del directorio de trabajo desde la consola:  npm install
3) en el archivo package.json encontrará las dependencias instaladas ademas del comando para correr el servidor en modo debug 
4) ejecute npm run devstart --> con esto el servidor esta activo y escuchando peticiones a traves del puerto 3000
5) vaya a su navegador a la siguiente direccion http://localhost:3000

Si quiere mas informacion acerca de la configuracion del servidor express de este proyecto lo puede encontrar desde la carpeta del proyecto en ./bin/www
ahi encontraras la creacion y obtencion del puerto para el servidor, ademas de eventos programados para el seguimiento de errores si falla la creacion de la instancia del server, y para dar feedback acerca del puerto por el cual se esta escuchando las peticiones en caso de que el servidor se haya creado correctamente. 

