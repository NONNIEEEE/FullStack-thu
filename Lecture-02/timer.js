const startTime = Date.now();

function someHeavyTask() {
  for (let i = 0; i < 4e7;){
       Math.sqrt(i); 
  }
}
someHeavyTask();
const endTime = Date.now();
console.log(`ฟังก์ชันใช้เวลาทำงาน: ${duration} มิลลิวินาที`);