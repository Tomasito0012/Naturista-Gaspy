const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
.typeString('Naturista Gaspy, medicina natural')
.pauseFor(200)
.start();