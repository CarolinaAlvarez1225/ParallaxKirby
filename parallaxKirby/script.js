document.addEventListener('DOMContentLoaded', function () {

    var layer1 = document.getElementById('layer1');
    var layer2 = document.getElementById('layer2');
    var layer3 = document.getElementById('layer3');
    var layer4 = document.getElementById('layer4');
    var layer5 = document.getElementById('layer5');
    var layer6 = document.getElementById('layer6');
    var layer7 = document.getElementById('layer7');
    var container = document.getElementById('parallax-container');

    //Definimos las velocidades de desplazamiento
    const arbustos3 = 0.3;
    const colinas2 = 0.1; // El frente se mueve más lento
    const arbusto2 = 0.3;
    const colina1 = 0.07

    function updateParallax() {
        // Es para que obtengamos la posición de scroll del elemento contenedor (respecto al top de la ventana)
        const scrollOffset = container.getBoundingClientRect().top;

        // Multiplicamos el desplazamiento por la velocidad de cada capa

        layer2.style.transform = `translate3d(0, ${scrollOffset * arbustos3}px, 0)`;

        layer3.style.transform = `translate3d(0, ${scrollOffset * colinas2}px, 0)`;

        layer4.style.transform = `translate3d(0, ${scrollOffset * arbusto2}px, 0)`;

        layer5.style.transform = `translate3d(0, ${scrollOffset * colina1}px, 0)`;

        //layer5.style.transform = `translate3d(0, ${scrollOffset * speed2}px, 0)`;

        //layer6.style.transform = `translate3d(0, ${scrollOffset * speed6}px, 0)`;

        //layer7.style.transform = `translate3d(0, ${scrollOffset * speed2}px, 0)`;
    }

    //Agregamos el listener para el evento
    window.addEventListener('scroll', updateParallax);
});