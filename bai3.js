//    Đây là danh sách tất cả các hoán vị có thể có của các phần tử [a, b, c, d].
//    Mỗi danh sách bên trong đại diện cho một hoán vị khác nhau. 
//    Có tổng cộng 24 hoán vị trong trường hợp này
function permute(nums) {
    // Lưu kết quả vào một mảng tạm
    let result = [];
  
    function backtrack(nums, temp) {
      // Nếu temp có độ dài bằng với nums, đây là một hoán vị hoàn chỉnh
      if (temp.length === nums.length) {
        result.push(temp.slice());
      } else {
        // Lặp qua từng phần tử trong nums
        for (let i = 0; i < nums.length; i++) {
          // Nếu phần tử đã được sử dụng, bỏ qua
          if (temp.includes(nums[i])) continue;
  
          // Thêm phần tử vào mảng tạm
          temp.push(nums[i]);
  
          // Gọi đệ quy để tìm các hoán vị còn lại
          backtrack(nums, temp);
  
          // Xóa phần tử vừa thêm vào để thử các phần tử tiếp theo
          temp.pop();
        }
      }
    }
  
    backtrack(nums, []);
    return result;
  }
  
  let input = ['a', 'b', 'c', 'd'];
  console.log(permute(input));