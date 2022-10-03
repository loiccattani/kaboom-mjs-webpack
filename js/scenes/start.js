export {
    init
};

function init() {
    loadSprite("bean", "/images/bean.png");

    scene('start', () => {
        add([
            sprite("bean"),
            pos(center()),
            origin("center"),
        ]);
    });
}
