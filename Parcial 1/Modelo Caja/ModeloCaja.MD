># Modelo Caja
>
>El modelo de caja viene de la extensión CSS en donde todo tiene una caja alrededor  
>En CSS existen 2 tipos de cajas
>- Cajas en bloque
>- Cajas en linea  
>
>Estas características se refieren al modo como se comporta la caja.  
>
>Si una caja se define como un bloque, se comportará de las maneras siguientes:
> - La caja fuerza un salto de línea al llegar al final de la línea.  
> - La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.  
> - Se respetan las propiedades width y height.
> - El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.
>
> ## Partes de una caja
> - 1.- Area de contenido
> - 2.- Area de relleno (Padding)
> - 3.- Area de borde (Border)
> - 4.- Área de margen (Margin)
>
>Las áreas de margen, relleno y borde, a su vez, pueden dividirse en cuatro segmentos según su posición: superior (top), derecho (right), inferior (bottom) e izquierdo (left). El tamaño de cada área o de sus segmentos está dado por el valor de las respectivas propiedades, definidas en forma global o discriminadas por segmento. Por ejemplo, la siguiente sentencia asignará un margen homogéneo de 20 píxeles alrededor de la caja:
>
>- div {   
>  margin: 20px   
>}
>
>Si en cambio se desea asignar valores distintos a cada uno de los segmentos, pueden reflejarse los cuatro valores numéricos siguiendo el orden top - right - bottom - left. El siguiente ejemplo asigna 10 píxeles arriba, 5 a la derecha, 20 abajo y nada a la izquierda:
>
>- div {   
>  margin: 10px 5px 20px 0   
>}