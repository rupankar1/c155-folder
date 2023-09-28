AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type: "string", default: "#ring1"},
    },

    update: function () {
        this.isCollided(this.data.element);
    },

    isCollided: function (elementId) {
        const elememt = document.querySelector(elementId);
        elememt.addEventListener("collide", (e) =>{
            if (elementId.includes("#ring")) {
                console.log(elementId + "collision");
            } else if (elementId.includes("#hurdle")) {
                console.log("Bird Collision");
            }
        });
    },

});
