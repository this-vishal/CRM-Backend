
// client schema type

const ClientDataType = {

    name: '',
    email: '',
    dob: '',
    identityCard: {
        identityType: '',
        identityNumber: ''
    },
    address: {
        city: '',
        country: '',
        state: '',
        street: '',
        zip: ''
    },
    phone: {
        primaryPhone: '',
        alternatePhone: ''
    },
    company: {
        companyName: '',
        website: '',
        email: ''
    },
    project: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        clientId: ''
    }

}

// Project Schema type

const ProjectDataType = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    clientId: '',

    team: {
        teamName: '',
        description: '',
        projectId: ''
    },
    teamMembers: [
        { empid: '' },
    ]
}

// team schemaType 

const TeamDataType = {

    teamName: '',
    description: '',
    projectId: '',

    teamMembers: [
        { empid: '' },
    ]

}

//employee SchemaType

const EmployeeDataType = {

    empId: '',
    name: '',
    email: '',
    dob: '',
    joiningDate: '',
    designationId: '',
    departmentId: '',
    roleId: '',
    identityCard: {
        identityType: '',
        identityNumber: ''
    },
    address: {
        city: '',
        country: '',
        state: '',
        street: '',
        zip: ''
    },
    phone: {
        primaryPhone: '',
        alternatePhone: ''
    },
}


// department

const DepartmentDataType = {
    deptId: '',
    name: '',
    description: '',
    departmentHead: '',
}

const DesignationDataType = {
    designationName: '',
    description: '',
}

const RoleDataType = {
    roleName: '',
    description: '',
}



// company

const  CompanyDataType={
    companyName: '',
    website: '',
    email: '',
    clientId:''
}



