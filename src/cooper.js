function cooper(attr){
  if(attr.gender == "man") {
    if(attr.age >= 50) {
      if(attr.distance >= 2400) {
        return "Excellent";
      }
      else if(attr.distance >= 2000) {
        return "Above Average";
      }
      else if(attr.distance >= 1600) {
        return "Average";
      }
      else if(attr.distance >= 1300) {
        return "Below Average";
      }
      else if(attr.distance < 1300) {
        return "Poor";
      }
    }
    else if(attr.age >= 40) {
      if(attr.distance >= 2500) {
        return "Excellent";
      }
      else if(attr.distance >= 2100) {
        return "Above Average";
      }
      else if(attr.distance >= 1700) {
        return "Average";
      }
      else if(attr.distance >= 1400) {
        return "Below Average";
      }
      else if(attr.distance < 1400) {
        return "Poor";
      }
    }
    else if(attr.age >= 30) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      else if(attr.distance >= 2300) {
        return "Above Average";
      }
      else if(attr.distance >= 1900) {
        return "Average";
      }
      else if(attr.distance >= 1500) {
        return "Below Average";
      }
      else if(attr.distance < 1500) {
        return "Poor";
      }
    }
    else if(attr.age >= 20) {
      if(attr.distance >= 2800) {
        return "Excellent";
      }
      else if(attr.distance >= 2400) {
        return "Above Average";
      }
      else if(attr.distance >= 2200) {
        return "Average";
      }
      else if(attr.distance >= 1600) {
        return "Below Average";
      }
      else if(attr.distance < 1600) {
        return "Poor";
      }
    }
    else if(attr.age >= 17) {
      if(attr.distance >= 3000) {
        return "Excellent";
      }
      else if(attr.distance >= 2700) {
        return "Above Average";
      }
      else if(attr.distance >= 2500) {
        return "Average";
      }
      else if(attr.distance >= 2300) {
        return "Below Average";
      }
      else if(attr.distance < 2300) {
        return "Poor";
      }
    }
    else if(attr.age >= 15) {
      if(attr.distance >= 2800) {
        return "Excellent";
      }
      else if(attr.distance >= 2500) {
        return "Above Average";
      }
      else if(attr.distance >= 2300) {
        return "Average";
      }
      else if(attr.distance >= 2200) {
        return "Below Average";
      }
      else if(attr.distance < 2200) {
        return "Poor";
      }
    }
    else if(attr.age >= 13) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      else if(attr.distance >= 2400) {
        return "Above Average";
      }
      else if(attr.distance >= 2200) {
        return "Average";
      }
      else if(attr.distance >= 2100) {
        return "Below Average";
      }
      else if(attr.distance < 2100) {
        return "Poor";
      }
    }
  }
  else if(attr.gender == "female") {
    if(attr.age >= 50) {
      if(attr.distance >= 2200) {
        return "Excellent";
      }
      else if(attr.distance >= 1700) {
        return "Above Average";
      }
      else if(attr.distance >= 1400) {
        return "Average";
      }
      else if(attr.distance >= 1100) {
        return "Below Average";
      }
      else if(attr.distance < 1100) {
        return "Poor";
      }
    }
    else if(attr.age >= 40) {
      if(attr.distance >= 2300) {
        return "Excellent";
      }
      else if(attr.distance >= 1900) {
        return "Above Average";
      }
      else if(attr.distance >= 1500) {
        return "Average";
      }
      else if(attr.distance >= 1200) {
        return "Below Average";
      }
      else if(attr.distance < 1200) {
        return "Poor";
      }
    }
    else if(attr.age >= 30) {
      if(attr.distance >= 2500) {
        return "Excellent";
      }
      else if(attr.distance >= 2000) {
        return "Above Average";
      }
      else if(attr.distance >= 1700) {
        return "Average";
      }
      else if(attr.distance >= 1400) {
        return "Below Average";
      }
      else if(attr.distance < 1400) {
        return "Poor";
      }
    }
    else if(attr.age >= 20) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      else if(attr.distance >= 2200) {
        return "Above Average";
      }
      else if(attr.distance >= 1800) {
        return "Average";
      }
      else if(attr.distance >= 1500) {
        return "Below Average";
      }
      else if(attr.distance < 1500) {
        return "Poor";
      }
    }
    else if(attr.age >= 17) {
      if(attr.distance >= 2300) {
        return "Excellent";
      }
      else if(attr.distance >= 2100) {
        return "Above Average";
      }
      else if(attr.distance >= 1800) {
        return "Average";
      }
      else if(attr.distance >= 1700) {
        return "Below Average";
      }
      else if(attr.distance < 1700) {
        return "Poor";
      }
    }
    else if(attr.age >= 15) {
      if(attr.distance >= 2100) {
        return "Excellent";
      }
      else if(attr.distance >= 2000) {
        return "Above Average";
      }
      else if(attr.distance >= 1700) {
        return "Average";
      }
      else if(attr.distance >= 1600) {
        return "Below Average";
      }
      else if(attr.distance < 1600) {
        return "Poor";
      }
    }
    else if(attr.age >= 13) {
      if(attr.distance >= 2000) {
        return "Excellent";
      }
      else if(attr.distance >= 1900) {
        return "Above Average";
      }
      else if(attr.distance >= 1600) {
        return "Average";
      }
      else if(attr.distance >= 1500) {
        return "Below Average";
      }
      else if(attr.distance < 1500) {
        return "Poor";
      }
    }
  }
}
