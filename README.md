# Inigo Idoate
### Introduccion
Soy Inigo Idoate y este es mi repositorio personal,donde ire subiendo los diferentes tabajos y versiones de las practicas de Ingenieria Web.

En este fichero incluire los comandos basicos de git que hemos aprendido.
Recordemos que git se compone de 3 Areas {Git Repository, Staging Area, Working Directory}.
### Comandos git
+ #### Comandos basicos
    - ##### git status
        * Con este comando vemos el estado del repositorio local , nos puede servir de gran ayuda y gracias a el podemos observar la rama en la que estamos , lo que hay sin guardar o lo que esta ya guardado.Vemos el staging area.
    - ##### git add
        * Con este comando *añadimos* los archivos creados o modificados al staging area.
        * Para incluir todos los quue habria que añadir seria -> *git add .*
        * Para solo incluir uno seria -> *git add archivo.txt* 
    - ##### git rm
        * Con este comando *eliminamos* los archivos creados o modificados del staging area.
        * Se utiliza igual que el git add .
    - ##### git commmit
        * Sirve para guardar los cambios y dejar limpio el staging area para poder hacer push.
        * Solemos usarlo de la siguiente manera -> *git commit -m "Mensaje del commit"* 
        * Si queremos añadir -a  de ofrma que quede -> *git commit -a -m "Mensaje del commit"* para añadir los archivos que estan en seguimiento (staging area).
    - ##### git pull
        * Sirve para recibir los cambios que ha tenido el repositorio de Git "Que no han sido por nuestra parte".
        * De alguna manera actualizamos/sincronizamos el repositorio "local" con el "online".
        * Se utiliza de la siguiente manera -> *git pull*
    - ##### git push
        * Sirve para enviar la informacion que tenemos en el Staging Area al Git Repository.
        * Para poder hacer un push tenemos que estar actualizados de los cambios que ha tenido el repositorio (git pull).
        * Se utiliza de la siguiente manera -> *git push* 
+ #### Comandos que aportan Informacion
    - ##### git log
        * Sirve para ver los commits realizados hasta el momento.
        * Nos sirve para ver la evolucion del proyecto.
        * Tiene muchas variantes a la hora de usarlo -> *git log -p* || *git log --stat*                 -> *git log --pretty=oneline* || *git log --graph*  || muchas otras mas
    - ##### git lol
        * Este comando **no** nos lo da git  pero nos facilita mucho obtener informacion
        * Es un alias que hemos creado a partir del siguiente comando                                     -> *git config --global --add alias.lol "log --graph --decorate --pretty=oneline --abbrev-commit --all"* 
    - ##### git remote -v
        * Sirve para consultar qué repositorios estás utilizando
        * Se utiliza de la siguiente manera *git remote -v*
    - ##### git fetch
        * Sirve para recuperar información del repositorio remoto, conocer todas sus ramas y estado.
        * Se utiliza de la siguiente manera *git fetch*
    
+ #### Comandos para modificar cambios.
    - ##### git commit --amend
        * Este comando sirve para modificar el ultimo commit.
        * Se puede utilizar de mil opciones para ver documentacion [pincha aqui](http://dev.nodeca.com) .
    - #####  git reset
        * Sirve para retirar el fichero del Staging Area, hay multitud de opciones al utilizarlo con multitud de consecuencias distintas.
        * Para ver la documentacion [pincha aqui](https://git-scm.com/docs/git-reset) .
    - ##### git checkout
        * Sirve para regresar a un estado del proyecto, descartar modificaciones etc..
        * Para ver las utilidades y como se usa el comando [pincha aqui](https://www.atlassian.com/es/git/tutorials/using-branches/git-checkout)
    - ##### git revert 
        * sirve para crear un nuevo commit revirtiendo cambios.
        * se utiliza de la siguiente manera -> *git revert id_commmit_a_revertir* 
+ #### Comandos para modificar ramas
    - ##### git checkout 
        * Sirve para cambiar el HEAD a la rama que queramos.
        * Se utiliza de la siguiente manera -> *git checkout nombre_rama* 
    - ##### git merge 
        * Sirve para unir una rama a la rama actual.
        * Se utiliza de la siguiente manera -> *git merge nombre_rama_que_queremos_unir* 
    
    - ##### git rebase
        * Sirve para unir ramas pero es mas complejo y de momento no lo vamos a utilizar.
    
    - ##### git branch
        * Sirve para crear una rama
        * Se utiliza de la siguiente manera -> *git branch nombre_rama_a_crear*

+ #### Comandos para borrador
    - ##### git stash 
        * Sirve para crear un borrador en el directorio git.
    - ##### git stash list
        * Sirve para ver los archivos del  borrador
    - ##### git stash apply
        * Sirve para aplicar los cambios del borrador.

Aparte de los comandos he creado un fichero .gitignore para que ignore los archivos propios e innecesarios de mac .



















