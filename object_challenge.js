var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

var tmp = null;
// Name of the course ('JavaScript Applications')
tmp = course.name
console.log(tmp);

// Name of the second teacher ('Shane')
tmp = course.teachers[1]
console.log(tmp);

// Name of the first student ('Steve')
tmp = course.students[0].name
console.log(tmp);

// Katy's computer type ('macbook')
tmp = course.students[1].computer.type
console.log(tmp);

// The preReq equipment object
tmp = course.preReqs.equipment
console.log(tmp);

// The second OSOption from equipment prereqs ('osx')
tmp = course.preReqs.equipment.OSOptions[1]
console.log(tmp);

// string listing the OSOptions separated by 'or' ('linux or osx')
tmp = course.preReqs.equipment.OSOptions.join(' or ')
console.log(tmp);

// An array of all the students that are using OSX.
osx_list = []
for (i = 0; i < course.students.length; i++) {
  if (course.students[i].computer.OS === 'OSX'){
    osx_list.push(course.students[i])
  }
}
console.log(osx_list);
