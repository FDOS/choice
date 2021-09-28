NOMBRE

   CHOICE - Espera a que el usuario escoja una tecla de entre una lista
    de opciones

SINOPSIS

   CHOICE [/B] [/C[:]opciones] [/N] [/S] [/T[:]c,nn] [texto]

OPCIONES

 /B
    Hace pitidos al preguntar.

 /C[:]opciones
    Indica las teclas entre las que escojer. Cuando se muestre las
    teclas estarán separadas por comas y rodeadas por corchetes ( [] )
    seguidos del signo de interrogación. Si no se incluye la opción /C
    se usará sn por omisión. Los dos puntos (:) son opcionales.
 /N
    No mostrar las teclas posibles. Sí se muestra el texto previo a las
    teclas. Con esta opción las teclas indicadas aún son válidas.

 /S
    Diferenciar entre mayúsculas y minúsculas. Si no se especifica
    CHOICE aceptará tanto las teclas mayúsculas como las minúsculas.

 /T[:]c,nn
    Hace que CHOICE espera los segundos indicados antes de escojer la
    opción por omisión. La opción /T acepta los siguientes parámetros:

       c   Especifica  la  opción  por  omisión  tras  nn segundos. El
           caracter debe estar entre los especificados en la opción /C

       nn  Indica el  número de  segundos a  esperar.  Acepta  valores
           entre 0 y 99. Un valor de 0 hará que no se espere antes de
           seleccionar la opción por omisión.

   texto
     Pregunta a mostrar antes de las opciones.

ESTADO DE SALIDA

   ERRORLEVEL será la posición ordinal de la tecla pulsada por el usuario.

AUTOR

   Jim Hall, jhall@freedos.org

