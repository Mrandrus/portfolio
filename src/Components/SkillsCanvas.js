

    function startGame() {
        myGameArea.start();
      }

    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
          this.canvas.width = 480;
          this.canvas.height = 30;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
      }

export default function SkillsCanvas() {
    return (
        <div className="skillsCanvasPage">
            {startGame()}
        </div>
    );
}
