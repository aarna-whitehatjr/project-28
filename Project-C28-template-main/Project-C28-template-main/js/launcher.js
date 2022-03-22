class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 10
        }
        this.bodyA = body;
        this.pointB = pointB;
        this.launcher = Constraint.Create(options);
        World.add(world.this.launcher);

    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
   
}