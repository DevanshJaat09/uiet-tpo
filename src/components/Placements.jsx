import { useState } from 'react';
import { useEffect } from 'react';

const placementData = {
  "2025": {
    companies: [
      {
        name:"Academor Pvt.Ltd.",
        students:[
          {name:"Vikas", package:6},
          {name:"Mohit", package:6},
          {name:"Mayank", package:6},
          {name:"Varun Ahuja", package:6},
          {name:"Chandan", package:6},
          {name:"Shivam Jha", package:6},
          {name:"Sumit Raj", package:6},
          {name:"Harsh Gautam", package:6},
          {name:"Siddharth Sachdeva", package:6},
          {name:"Darpit", package:6},
          {name:"Pritam", package:6},
          {name:"Shivansh Sharma", package:6},
          {name:"Rahul Goyal", package:6},
          {name:"Yogesh Kumar", package:6},
          {name:"Annu Sharma", package:6},
          {name:"Pushpendra Kumar", package:6},
          {name:"Arzoo Dalal", package:6},
          {name:"Saini Aditaya", package:6},
          {name:"Gaurav Shahi", package:6},
          {name:"Piyush Yadav", package:6},
          {name:"Aniket Bihana", package:6},
          {name:"Rajeev Sharma", package:6},
          {name:"Naman Saini", package:6},
          {name:"Hitesh Chauhan", package:6},
          {name:"Mohd Saifullah", package:6},
          {name:"Mehak Yadav", package:6},
          {name:"Garima Aswathi", package:6},
          {name:"Himanshi Sharma", package:6},
          {name:"Jagdish Gupta", package:6},
          {name:"Dhanender Kumar", package:6},
        ]
      },
      {
        name:"Panacea Biotec Pvt.Ltd",
        students:[
          {name:"Prachi Sharma", package:4},
          {name:"Arzoo", package:null},
          {name:"Rakshit", package:null},
          {name:"Juhi", package:null},
        ]
      },
      {
        name : "MTAS",
        students:[
          {name:"Jagriti", package:3},
          {name:"Adtiya", package:null},
          {name:"Yayaati", package:null},
          {name:"Arun Kumar", package:null},
        ]
      },
      {
        name : "Cognizant",
        students:[
          {name:"Nishu Kumari", package:4.5},
          {name:"Deepanshu", package:null},
          {name:"Mayank Nain", package:null},
          {name:"Ishan Bathla", package:null},
          {name:"Harshita", package:null},
          {name:"Akshay Vats", package:null},
          {name:"Ishan Garg", package:null},
          {name:"Arun Kumar", package:null}
        ]
      },
      {
        name :"ABACA",
        students :[
          {name:"Aryan", package:3.5},
          {name:"Himanshi", package:null},
          {name:"Arun", package:null},
          {name:"Harshita", package:null},
          {name:"Sahil", package:null},
          {name:"Sheena", package:null},
          {name:"Dhun", package:null},
          {name:"Suraj", package:null},
          {name:"Simirti", package:null},
          {name:"Parvesh", package:null},
          {name:"Vipul", package:null},
          {name:"Hunar", package:null}
        ]
      },
      {
        name : "Sonalika Pvt.Ltd.",
        students :[
          {name:"Dhun Bhatla", package:6.5},
          {name:"Harsh Khatri", package:null}
        ]
      },
      {
        name : "BEL",
        students :[
          {name : "Aniket Bihana", package: 11.4},
          {name:"Varun Ahuja", package:null},
          {name:"Manuj", package:null},
          {name:"Dhruv Sahu", package:null}
        ]
      },
      {
        name: "Infosys",
        students: [
          { name: "Vansh Punia", package: 3.6 },
          { name: "Anurag", package: 3.6 },
          { name: "Kanishka Mittal", package: 3.6 },
          { name: "Yash Pal Goyal", package: 3.6 },
          { name: "Himanshu Sinha", package: 3.6 },
          { name: "Smriti Srivastava", package: 3.6 },
          { name: "Tanishq Garg", package: 3.6 },
          { name: "Mayank Nain", package: 3.6 },
          { name: "Prashant Kumar", package: 3.6 },
          { name: "Chakshu ", package: 3.6 },
          { name: "Aryan Singla", package: 3.6 },
          { name: "Ankur Singh", package: 3.6 },
          { name: "Harsh Kumar", package: 3.6 },
          { name: "Manish Kumar", package: 3.6 },
          { name: "Aditi Walia", package: 3.6 },
          { name: "Devansh Sharma", package: 3.6 },
          { name: "Sahil", package: 3.6 },
          { name: "Aditya Pratap Singh", package: 3.6 },
          { name: "Naman Saini", package: 3.6 },
          { name: "Himanshu Tiwari", package: 3.6 },
          { name: "Prashant Sharma", package: 3.6 },
          { name: "Teena Jaglan", package: 3.6 },
          { name: "Priyanshu ", package: 3.6 },
          { name: "Harsh Koul", package: 3.6 },
          { name: "Disha Aggarwal", package: 3.6 },
          { name: "Akshay Vats", package: 3.6 },
          { name: "Pritam Rajput", package: 3.6 },
          { name: "Samarjeet Singh", package: 3.6 },
          { name: "Dushyant Garg", package: 3.6 },
          { name: "Gaurav", package: 3.6 },
          { name: "Mitesh Lodhi", package: 3.6 },
          { name: "Rahul Goyal", package: 3.6 },
          { name: "Aditya Sharma", package: 3.6 },
          { name: "Aaryan Sharma", package: 3.6 },
          { name: "Lovely Gupta", package: 3.6 },
          { name: "Aman Kumar", package: 3.6 },
          { name: "Nidhi", package: 3.6 },
          { name: "Aniket Bihana", package: 3.6 },
          { name: "Rishabh Singh", package: 3.6 },
          { name: "Himanshu", package: 3.6 },
          { name: "Manish Kumar", package: 3.6 },
          { name: "Rakesh Rawat", package: 3.6 },
          { name: "Ansh Kamra", package: 3.6 },
          { name: "Aastha Sachdeva", package: 3.6 },
          { name: "Aaditya Rana", package: 3.6 },
          { name: "Deepanshu", package: 3.6 },
          { name: "Steshi", package: 3.6 },
          { name: "Mayank Taneja", package: 3.6 },
          { name: "Ishan Garg", package: 3.6 },
          { name: "Priya Yadav", package: 3.6 },
          { name: "Parneet Kaur", package: 3.6 },

        ]
      },
      {
        name: "Hexaware",
        students: [
          { name: "Jitesh Bansal", package: 6 },
          { name: "Kartik Dhar", package: 4 },
          { name: "Aryan Singh", package: 4 },
          { name: "Rakshita Singh Khokhar", package: 4 },
          { name: "Lokesh", package: 4 },
          { name: "Akshay Thappar", package: 4 },
          { name: "Riya johar", package: 4 },
          { name: "gaurav kumar", package: 4 },
          { name: "Kusumanjli", package: 4 },
          { name: "Isha", package: 6 }
        ]
      },
      {
        name: "75Way Technologies PVT.LTD.",
        students: [
          { name: "Dushyant Garg", package:3.63},
          { name: "Jay Verma", package: 5 },
          {name:"Yashpal", package:3.6},
          {name:"Aditya", package:4.5}
        ]
      }
    ]
  },
  "2024": {
    companies: [
      {
        name: "Infosys",
        students: [
          { name: "Vansh Punia", package: 3.6 },
          { name: "Anurag", package: 3.6 },
          { name: "Kanika Mittal", package: 3.6 },
          { name: "Yash Pal Goyal", package: 3.6 },
          { name: "Himanshu Sinha", package: 3.6 },
          { name: "Smriti Srivastava", package: 3.6 },
          { name: "Tanishq Garg", package: 3.6 },
          { name: "Mayank Nain", package: 3.6 },
          { name: "Prashant Kumar", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },

        ]
      },
      {
        name: "Hexaware",
        students: [
          { name: "Jitesh Bansal", package: 6 },
          { name: "Kartik Dhar", package: 4 },
          { name: "Aryan Singh", package: 4 },
          { name: "Rakshita Singh Khokhar", package: 4 },
          { name: "Lokesh", package: 4 },
          { name: "Akshay Thappar", package: 4 },
          { name: "Riya johar", package: 4 },
          { name: "gaurav kumar", package: 4 },
          { name: "Kusumanjli", package: 4 },
          { name: "Isha", package: 6 }
        ]
      },
      {
        name: "Hughes Systique",
        students: [
          { name: "Student 1", package: 5 },
          { name: "Student 2", package: 5 }
        ]
      }
    ]
  },
  "2023": {
    companies: [
      {
        name: "Infosys",
        students: [
          { name: "Ishant Khurana", package: null },
          { name: "Shivam Varshney", package: null },
          { name: "Abhishek Kumar", package: 3.6 },
          { name: "Amit Kumar", package: 3.6 },
          { name: "Lakshay Yadav", package: 3.6 },
          { name: "Lovish Aggarwal", package: 3.6 },
          { name: "Riya Johar", package: 3.6 },
          { name: "Shivani DHIMAN", package: 3.6 },
          { name: "Aakash Tiwari", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },
          { name: "", package: 3.6 },

        ]
      },
      {
        name: "Hexaware",
        students: [
          { name: "Jitesh Bansal", package: 6 },
          { name: "Kartik Dhar", package: 4 },
          { name: "Aryan Singh", package: 4 },
          { name: "Rakshita Singh Khokhar", package: 4 },
          { name: "Lokesh", package: 4 },
          { name: "Akshay Thappar", package: 4 },
          { name: "Riya johar", package: 4 },
          { name: "gaurav kumar", package: 4 },
          { name: "Kusumanjli", package: 4 },
          { name: "Isha", package: 6 }
        ]
      },
      {
        name: "Hughes Systique",
        students: [
          { name: "Student 1", package: 5 },
          { name: "Student 2", package: 5 }
        ]
      }
    ]
  },
  "2022": {
    companies: [
      {
        name: "Infosys",
        students: [
          { name: "Student A", package: 3.5 },
          { name: "Student B", package: 3.5 },
          { name: "Student C", package: 3.5 }
        ]
      },
      {
        name: "TCS",
        students: [
          { name: "Student D", package: 3.8 },
          { name: "Student E", package: 3.8 }
        ]
      }
    ]
  },
  "2021": {
    companies: [
      {
        name: "Wipro",
        students: [
          { name: "Student F", package: 3.2 },
          { name: "Student G", package: 3.2 }
        ]
      },
      {
        name: "Cognizant",
        students: [
          { name: "Student H", package: 4.2 },
          { name: "Student I", package: 4.2 }
        ]
      }
    ]
  },
  "2020": {
    companies: [
      {
        name: "IBM",
        students: [
          { name: "Student J", package: 4.5 },
          { name: "Student K", package: 4.5 }
        ]
      }
    ]
  },
  "2019": {
    companies: [
      {
        name: "Accenture",
        students: [
          { name: "Student L", package: 4.0 },
          { name: "Student M", package: 4.0 }
        ]
      }
    ]
  },
  "2018": {
    companies: [
      {
        name: "Capgemini",
        students: [
          { name: "Student N", package: 3.8 },
          { name: "Student O", package: 3.8 }
        ]
      }
    ]
  }
};

// Utility functions
const getTotalStudentsPlaced = (year) => {
  return placementData[year].companies.reduce((total, company) => {
    return total + company.students.filter(s => s.package !== null).length;
  }, 0);
};

export default function PlacementDashboard() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [year, setYear] = useState("2023");
  const [companyFilter, setCompanyFilter] = useState("All");
  
  const years = Object.keys(placementData).sort((a, b) => b - a);
  
  const handleYearChange = (event) => {
    setYear(event.target.value);
    setCompanyFilter("All");
  };
  
  const handleCompanyChange = (event) => {
    setCompanyFilter(event.target.value);
  };
  
  const companyOptions = ["All", ...placementData[year].companies.map(c => c.name)];
  
  const getFilteredStudents = () => {
    if (companyFilter === "All") {
      return placementData[year].companies.flatMap(company => 
        company.students.map(student => ({
          ...student,
          company: company.name
        }))
      );
    } else {
      const company = placementData[year].companies.find(c => c.name === companyFilter);
      return company ? company.students.map(student => ({
        ...student,
        company: company.name
      })) : [];
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-outfit font-semibold kuk">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="year-select" className="block text-sm font-medium text-[#fff2f2] outline-[#fff2f2] mb-1">
            Passout Year
          </label>
          <select
            id="year-select"
            value={year}
            onChange={handleYearChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-[#fff2f2] border-[#fff2f2] focus:outline-none focus:ring-blue-500 border-2 rounded sm:text-sm "
          >
            {years.map((y) => (
              <option key={y} className='text-[#fff2f2] bg-[#1E2137]' value={y}>{y} Passout</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="company-select" className="block text-sm font-medium text-[#fff2f2] mb-1">
            Company Filter
          </label>
          <select
            id="company-select"
            value={companyFilter}
            onChange={handleCompanyChange}
            className="mt-1 block w-full pl-3 text-[#fff2f2] pr-10 py-2 text-base border-[#fff2f2] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded  border-2"
          >
            {companyOptions.map((company) => (
              <option className='bg-[#1E2137]' key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Total Students Placed</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{getTotalStudentsPlaced(year)}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Number of Companies</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{placementData[year].companies.length}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">Highest Package</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {Math.max(...placementData[year].companies.flatMap(company => 
              company.students
                .filter(s => s.package !== null)
                .map(s => s.package)
            ))} LPA
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package (LPA)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getFilteredStudents().map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                      {student.package}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}