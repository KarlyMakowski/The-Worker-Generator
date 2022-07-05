/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let person = [
    {
      name: "maria",
      lastName: "rodriguez"
    },
    {
      name: "pedro",
      lastName: "perez"
    },
    {
      name: "juan jose",
      lastName: "ruiz"
    }
  ];

  let address = [
    {
      cp: 2080,
      dir: {
        city: "madrid",
        avenida: "alcalá"
      }
    },
    {
      cp: 2085,
      dir: {
        city: "barcelona",
        avenida: "rua"
      }
    },
    {
      cp: 2087,
      dir: {
        city: "murcia",
        avenida: "atocha"
      }
    }
  ];

  let job = [
    {
      company: "Google",
      position: {
        job: "fullstack developer",
        level: "junior"
      },
      antiquity: 5
    },
    {
      company: "Amazon",
      position: {
        job: "back-end developer ",
        level: "senior"
      },
      antiquity: 5
    },
    {
      company: "Google",
      position: {
        job: "front-end developer ",
        level: "senior"
      },
      antiquity: 5
    }
  ];

  const randomNumber = arrayLength => {
    let num = Math.floor(Math.random() * arrayLength);

    return num;
  };

  const generateWorker = (person, address, job) => {
    let randomPosition = randomNumber(person.length);
    let personFullName =
      person[randomPosition].name + " " + person[randomPosition].lastName;

    let randomPosition2 = randomNumber(address.length);
    let workerAddress = `${address[randomPosition2].dir.avenida} ${address[randomPosition2].dir.city} ${address[randomPosition2].cp}`;

    let randomPosition3 = randomNumber(job.length);
    let workerJob = `${job[randomPosition3].position.level} ${job[randomPosition3].position.job} at ${job[randomPosition3].company} for ${job[randomPosition3].antiquity} years.`;

    let randomWorker = `${personFullName} ${workerAddress} ${workerJob}`;

    return randomWorker;
  };

  document.getElementById("ourWorkers").innerHTML = generateWorker(
    person,
    address,
    job
  );
};

// DESGLOSADO SERÍA TAL QUE ASÍ

//  const generateRandomWorker = (array) =>{
//   let randomArray = array[Math.floor(Math.random() * array.length)];
//    return randomArray;

//  }

/* AQUÍ ENTRARÍA TODA MI FUNCIÓN, UNA DENTRO DE OTRA
  let generateWorker = (person, address, job) => {
    const random = array => {
      let randomArray = array[Math.floor(Math.random() * array.length)];
      return randomArray;
    };

    let personFullName = random(person);
    let workerAddress = random(address);
    let workerJob = random(job);

    let randomWorker = `${personFullName} ${workerAddress} ${workerJob}`;

    return randomWorker;
  };

  generateWorker(person, address, job);*/

//  document.getElementById("ourWorkers").innerHTML = generateWorker();
