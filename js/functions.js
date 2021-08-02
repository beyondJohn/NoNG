
var db;


var tempHardCodedData = {
  "jhasim": {
    "header": {
      "headerlinks": [
        {
          "text": "Home",
          "uri": "/location"
        },
        {
          "text": "CME Activities",
          "uri": "/location"
        },
        {
          "text": "About Us",
          "uri": "/location"
        },
        {
          "text": "General Info",
          "uri": "/location"
        },
        {
          "text": "My Account",
          "uri": "/location"
        },
        {
          "text": "Support",
          "uri": "/location"
        }
      ],
      "sliders": [
        {
          "position": "0",
          "uri": "/location"
        }
      ]
    },
    "body": {
      "livecmeevents": [
        {
          "image": "http://www.jhasim1.com/index.aspx?case_id=755",
          "imageuri": "images/xrayIcon.JPG",
          "title": "The 13th Annual Johns Hopkins Multiple Sclerosis Series",
          "titlesecondary": "<div class=\"module-secondary-upcoming\">Miami, FL <span style=\"cursor: pointer; color:blue;\">more...</span><!-- <br />Houston, TX - Saturday, December 8, 2018 --><div class=\"credits\">CME/CNE Credits: 0.5</div></div>",
          "footer": "<div class=\"credits\">CME/CNE Credits: 0.5</div>"
        },
        {
          "image": "http://www.jhasim1.com/index.aspx?case_id=755",
          "imageuri": "images/xrayIcon.JPG",
          "title": "The 13th Annual Johns Hopkins Multiple Sclerosis Series",
          "titlesecondary": "<div class=\"module-secondary-upcoming\">Miami, FL <span style=\"cursor: pointer; color:blue;\">more...</span><!-- <br />Houston, TX - Saturday, December 8, 2018 --><div class=\"credits\">CME/CNE Credits: 0.5</div></div>",
          "footer": "<div class=\"credits\">CME/CNE Credits: 0.5</div>"
        }
      ],
      "cmeenduringmaterials": [
        {
          "image": "https://ce.asimcme.com/jhasim/content/10th-annual-johns-hopkins-dystonia-spasticity-practicum-update-toxin-treatment-managed-care",
          "imageuri": "images/symptoms.JPG",
          "title": "Symptoms and Underlying Pathology Diagnosis and Optimal Management more...",
          "titlesecondary": "<div class=\"module-secondary-upcoming\">Miami, FL <span style=\"cursor: pointer; color:blue;\">more...</span><!-- <br />Houston, TX - Saturday, December 8, 2018 --><div class=\"credits\">CME/CNE Credits: 0.5</div></div>",
          "footer": "<div class=\"credits\">CME/CNE Credits: 0.5</div>"
        },
        {
          "image": "http://opencme.org/course/new-era-treating-hemophilia-and-b-long-acting-coagulation-factors-may-improve-patient-outcome",
          "imageuri": "images/diagnosis.JPG",
          "title": "The 10th Annual Johns Hopkins Dystonia & Spasticity Practicum more...",
          "titlesecondary": "<div class=\"module-secondary-upcoming\">Miami, FL <span style=\"cursor: pointer; color:blue;\">more...</span><!-- <br />Houston, TX - Saturday, December 8, 2018 --><div class=\"credits\">CME/CNE Credits: 0.5</div></div>",
          "footer": "<div class=\"credits\">CME/CNE Credits: 0.5</div>"
        }
      ],
      "cmeactivities": [
        {
          "text": "Addiction Medicine",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=59&pageName=Zone-Addiction Medicine"
        },
        {
          "text": "Adolescent Medicine",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=28&pageName=Zone-Adolescent Medicine/Pediatrics"
        },
        {
          "text": "Cardiology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=9&pageName=Zone-Cardiology"
        },
        {
          "text": "Critical Care",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=20&pageName=Zone-Critical Care/Emergency Medicine"
        },
        {
          "text": "Dermatology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=19&pageName=Zone-Dermatology"
        },
        {
          "text": "Endocrinology/Diabetes",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=21&pageName=Zone-Endocrinology/Diabetes"
        },
        {
          "text": "Gastroenterology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=22&pageName=Zone-Gastroenterology"
        },
        {
          "text": "Hospitalists",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=76&pageName=Zone-Hospitalists"
        },
        {
          "text": "Infectious Diseases",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=8&pageName=Zone-Infectious Diseases"
        },
        {
          "text": "Interventional Cardiology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=23&pageName=Zone-Interventional Cardiology/Electrophysiology"
        },
        {
          "text": "Lung Cancer",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=85&pageName=Zone-Lung Cancer"
        },
        {
          "text": "Managed Care",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=24&pageName=Zone-Managed Care"
        },
        {
          "text": "Musculoskeletal",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=74&pageName=Zone-Musculoskeletal"
        },
        {
          "text": "Nephrology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=25&pageName=Zone-Nephrology"
        },
        {
          "text": "Neurology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=17&pageName=Zone-Neurology"
        },
        {
          "text": "Oncology/Hematology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=26&pageName=Zone-Oncology/Hematology"
        },
        {
          "text": "Ophthalmology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=14&pageName=Zone-Ophthalmology"
        },
        {
          "text": "Pain Management",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=27&pageName=Zone-Pain Management"
        },
        {
          "text": "Psychiatry",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=29&pageName=Zone-Psychiatry"
        },
        {
          "text": "Pulmonary Medicine",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=1&pageName=Zone-Pulmonary Medicine"
        },
        {
          "text": "Rheumatology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=60&pageName=Zone-Rheumatology"
        },
        {
          "text": "Surgery/Transplantation",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=30&pageName=Zone-Surgery/Transplantation"
        },
        {
          "text": "Urology",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=31&pageName=Zone-Urology"
        },
        {
          "text": "Women's Health",
          "uri": "http://www.jhasim.com/template.cfm?TEMPLATE=include_viewzone.cfm&ID=13&pageName=Zone-Women's Health"
        }
      ]
    },
    "footer": {
      "aboutlinks": [
        {
          "name": "About JHASiM",
          "uri": "/location"
        },
        {
          "name": "Privacy Policy",
          "uri": "/location"
        },
        {
          "name": "Cookies",
          "uri": "/location"
        },
        {
          "name": "Terms of Use",
          "uri": "/location"
        },
        {
          "name": "Advertising Policy",
          "uri": "/location"
        },
        {
          "name": "Help",
          "uri": "/location"
        }
      ],
      "subscriptionlinks": [
        {
          "name": "Subscribe for Free",
          "uri": "/location"
        },
        {
          "name": "Notifications",
          "uri": "/location"
        },
        {
          "name": "Advertising Manage Subscription",
          "uri": "/location"
        },
        {
          "name": "Login",
          "uri": "/location"
        }
      ]
    }
  }
}

var makeMenuItems = function (data) { // data:JSON dependency injecti

  // 
  // localStorage.setItem('db', data);
  // localStorage.setItem('tempDb', data);
  localStorage.setItem('db', JSON.stringify(tempHardCodedData));
  localStorage.setItem('tempDb', JSON.stringify(tempHardCodedData));


  var tempData = JSON.parse(localStorage.getItem('tempDb'));
  db = tempData;

  // build page items
  menuItems();
  activitiesItems();
  liveItems();
  enduringItems();
}

function getData() {
  makeMenuItems();//httpRequest("Get", config['apiUrl'] + "jhasim", "application/json", '', makeMenuItems);
}
getData();