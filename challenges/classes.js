// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerTwo{
  
    constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    }
    
    volume()  {
      var theVolume = this.length * this.width * this.height;
  
      return theVolume;
  }
  
      surfaceArea ()
      {
      var theSA = this.length * this.width + this.length * this.height + this.width * this.height;
  
      return theSA * 2;
    }
  }
  
  const cuboidOne = new CuboidMaker({
    length: 4 ,
    width: 5 ,
    height: 5
  });
  
  console.log(cuboidOne.volume());
  console.log(cuboidOne.surfaceArea());
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  // console.log(cuboid.volume()); // 100
  // console.log(cuboid.surfaceArea()); // 130
  
  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
  