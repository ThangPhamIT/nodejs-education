var classes = [
    { id: 1, 
      subject_name: 'Tiếng Pháp',
      class_name: 'Lớp sơ cấp',
      address: '123 Quang Trung, HCM',
      salary: 2500000,
      number_of_time: 3,
      study_time: 'Sắp xếp',
      require: 'Giáo viên Nam, Nữ',
      contact: '0123456789',
      status: 0
    },
    { id: 2, 
      subject_name: 'Toán',
      class_name: 'Lớp 12',
      address: '123 Quang Trung, HCM',
      salary: 2500000,
      number_of_time: 5,
      study_time: 'Tối 2, 4, 6',
      require: 'Giáo viên Nam, Nữ',
      contact: '0123456789',
      status: 1
    },
    { id: 3, 
      subject_name: 'Toán',
      class_name: 'Lớp 9',
      address: '123 Nguyễn Xí, Bình Thạnh, HCM',
      salary: 2000000,
      number_of_time: 2,
      study_time: 'Tối 2, 4',
      require: 'Giáo viên Nam',
      contact: '0123456789',
      status: 0
    }
];

var Class = {
    findAll: function () {
        return classes;
    }  
};

module.exports = Class;