import Api from '../../Axios/index';

export const login = (body,history) =>{
    return Api(`login?username=${body.username}&password=${body.password}`,'get', null) 
          .then(res =>{
              
                const userId = res.data[0].result;  
                if(userId  <= 0){
                      alert("Thông báo , Sai tài khoản hoặc mật khẩu ! Xin vui lòng nhập lại");
                }
                else {
                  //     alert("Đăng nhập thành công");
                      userInfoById(userId,history);  

                }
          })
}


const userInfoById = (id,history) =>{
      return Api(`userInfoById?userID=${id}`,'GET',null)
            .then(res =>{
                  const userInfo = res.data[0];
                  localStorage.setItem("token", JSON.stringify(userInfo));
                  const RoleId = userInfo.RoleId;
                  console.log(RoleId);
                  if(RoleId === 1){
                                
                      history.replace("/");
                      console.log("/");
                  }
                  if(RoleId === 2 )
                  {
                        console.log("/admin");
                      history.replace("/admin");
                  }
            })
}

export const addLogin = (body)=>{
      return Api('signup','POST',body)
                  .then(res=>{
                      const result = res.data[0].result;
                      if(result === 1){
                        alert("Thông báo : Đăng ký thành công !");
                        }
                      if(result === -1){
                            alert("Thông báo : Trùng username vui lòng xem lại !");
                      }
                      if(result === -2){
                        alert("Thông báo : Trùng email vui lòng xem lại !");
                      }
                      if(result === -3){
                        alert("Thông báo : Trùng phone vui lòng xem lại !");
                      }
                  
      });
}

export const changePassword = (body) =>{
      return Api(`changePassword?userID=${body.id}&oldPass=${body.oldpassword}&newPass=${body.newpassword}`,'GET',null)
            .then(res =>{
                  const result = res.data[0].result;
                  if(result === 1){
                        alert("Thông báo : Thay đổi thành công !");
                  }
                  if(result === -1){
                        alert("Thông báo : Mật khẩu cũ sai vui lòng xem lại   !");
                  }
            })
}

export const updateUser = (body)=>{
      return Api('updateUser','PUT',body)
                  .then(res=>{
                     
                      const result = res.data[0].result;
                      if(result === 1){
                              alert("Thông báo : Thay đổi thành công !");
                              const token = JSON.parse(localStorage.getItem("token"));
                              token.Name = body.name;
                              token.Email = body.email;
                              token.Phone = body.phone;
                              token.Address = body.address;
                              token.Avatar = body.avatar;
                              localStorage.removeItem("token");
                              localStorage.setItem("token", JSON.stringify(token));
                        }
                      if(result === -2){
                        alert("Thông báo : Trùng số điện thoại vui lòng xem lại !");
                      }
                      if(result === -1){
                        alert("Thông báo : Trùng email vui lòng xem lại !");
                      }
                  
      });
}