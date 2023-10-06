let studentObj = {
    name: 'John', //Property (key: value)
    surname: 'Doe', 
    'middle name': 'Steve',
    age: 25, 
    city: 'Vilnius', 
    group: 'FEUA10',
    isActive: true,
    address: {
        city: 'Vilnius', 
        street: 'Vilnius st.', 
        apartment: 15, 
        country: 'Lithuania',
    },
    getFullName: function() {
        return `Full name is: ${this.name} ${this.surname}.`
    },
    setStudentInactive: function() {
        this.isActive = false
    }, 
    setStudentActive: function(activitySatus) {
        if (typeof newActivityStatus === 'boolean') {
            this.isActive = newActivityStatus
        }
    }
}

console.log(studentObj)

//objekto properties pasiekimas
console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['isActive'])
console.log(studentObj['address'])
console.log(studentObj['address']['city'])
console.log(studentObj['address']['street'])
console.log(studentObj['address']['apartment'])
console.log(studentObj['address']['country'])

console.log(studentObj['middle name'])

let propertyName = 'age'
console.log(studentObj[propertyName])

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)
console.log(studentObj.isActive)
console.log(studentObj.address)
console.log(studentObj.address.city)
console.log(studentObj.address.street)
console.log(studentObj.address.apartment)
console.log(studentObj.address.country)

//objekto properties pakeitimas
console.log(studentObj.age)

studentObj.age = studentObj.age + 1
console.log(studentObj.age)

console.log(studentObj.city)
studentObj['city'] = 'Kaunas'
console.log(studentObj.city)

//objekto properties kurimas
//studentObj.birthCity = 'Klaipeda'
studentObj['birth city'] = 'Klaipeda'

//objekto properties istrynimas
delete studentObj.city
delete studentObj['middle name']

console.log(studentObj)

console.log(studentObj.getFullName())

console.log(studentObj.isActive)
studentObj.setStudentInactive()
console.log(studentObj.isActive)

studentObj.setStudentActive = function() {
    this.isActive = true
}

studentObj.setStudentActive()
console.log(studentObj.isActive)

studentObj.switchStudentActivity = function() {
    this.isActive = !this.isActive
}

studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)
studentObj.switchStudentActivity()
console.log(studentObj.isActive)

studentObj.setStudentActive(true)
console.log(studentObj.isActive)

const student2 = {}

student2.name = 'John'
student2.surname = 'Doe'
student2.age = 20

//console.log(student2)