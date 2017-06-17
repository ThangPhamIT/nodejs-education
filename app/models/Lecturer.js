var lecturers = [
    { id: 1, 
      full_name: 'Thắng Phạm Website',
      user_name: 'ThangPham',
      password: '123',
      address: '123 CV Phần mềm Quang Trung',
      email: 'pnthang@tma.com.vn',
      phone: '0123456789',
      dob: '18/10/1992',
      gener: 1,
      image: '/images/user.png',
      job: 'Web developer',
      education_name: 'Đại học Sư Phạm Kỹ Thuật Hồ Chí Minh',
      major_name: 'IT software',
      subject_name: 'Toán, Lý, Hóa, Sinh',
      class_name: ' Lớp 3, Lớp 4, Lớp 5, Lớp 6',
      area: ' Quận 12, Tân Bình, Tân Phú, Bình Tân, Bình Chánh, Hóc Môn',
      salary: 90000,
      note: ''
    },
    { id: 2, 
      full_name: 'Nguyễn Văn AAA BBB',
      user_name: 'ThangPham',
      password: '123',
      address: '123 CV Phần mềm Quang Trung',
      email: 'pnthang@tma.com.vn',
      phone: '0123456789',
      dob: '18/10/1992',
      gener: 1,
      image: '/images/default-no.jpg',
      job: 'Web developer',
      education_name: 'Đại học Văn Lang',
      major_name: 'Công nghệ sinh học',
      subject_name: 'Toán, Lý, Hóa, Sinh',
      class_name: 'Lớp 1, Lớp 2, Lớp 3, Lớp 4, Lớp 5',
      area: ' Quận 12, Tân Bình, Tân Phú, Bình Tân, Bình Chánh, Hóc Môn',
      salary: 900000,
      note: ''
    },
    { id: 3, 
      full_name: 'Nguyễn Văn AAA',
      user_name: 'ThangPham',
      password: '123',
      address: '123 CV Phần mềm Quang Trung',
      email: 'pnthang@tma.com.vn',
      phone: '0123456789',
      dob: '18/10/1992',
      gener: 1,
      image: '/images/default-no.jpg',
      job: 'Web developer',
      education_name: 'Đại học Sư Phạm Kỹ Thuật Hồ Chí Minh',
      major_name: 'IT software',
      subject_name: 'Toán, Lý, Hóa, Sinh',
      class_name: ' Lớp 3, Lớp 4, Lớp 5, Lớp 6, Lớp 7, Lớp 8, Lớp 9',
      area: ' Quận 12, Tân Bình, Tân Phú, Bình Tân, Bình Chánh, Hóc Môn',
      salary: 1800000,
      note: ''
    },
];

var Lecturer = {
    findAll: function () {
        return lecturers;
    }  
};

module.exports = Lecturer;