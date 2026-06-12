// Biến toàn cục để nhập & lưu trữ tên và tuổi cho các chức năng lựa chọn 1, 2, 3
let tenNguoiDung = "";
let tuoiNguoiDung = "";

function chayChuongTrinh() {
    let luaChon;

    do {
        // Menu tổng hợp với 10 lựa chọn khác nhau, mỗi lựa chọn sẽ gọi một chức năng tương ứng
        let menu = "===== MENU TỔNG HỢP =====\n" +
                   "1. Nhập tên của người dùng\n" +
                   "2. Nhập tuổi của người dùng\n" +
                   "3. In tên và tuổi của người dùng\n" +
                   "4. In bảng cửu chương của một số\n" +
                   "5. Kiểm tra số chẵn hay lẻ\n" +
                   "6. Tính tổng các số từ 1 đến N (N do người dùng nhập).\n" +
                   "7. In các số trong một dãy  (người dùng nhập dãy số)\n" +
                   "8. Kiểm tra số nhập vào có phải là số nguyên tố hay không\n" +
                   "9. In chuỗi đảo ngược của một chuỗi mà người dùng nhập\n" +
                   "10. Thoát khỏi chương trình\n\n" +
                   "Nhập lựa chọn của bạn (1-10):";

        // Lấy lựa chọn từ người dùng
        luaChon = prompt(menu);

        // Xử lý trường hợp người dùng bấm "Cancel" trên hộp thoại prompt
        if (luaChon === null) {
            alert("Đã hủy thao tác!");
            break;
        }

        // Sử dụng switch-case để điều hướng các chức năng
        switch (luaChon) {
            case '1':
                tenNguoiDung = prompt("Vui lòng nhập tên của bạn:");
                alert("Đã lưu tên!");
                break;

            case '2':
                tuoiNguoiDung = prompt("Vui lòng nhập tuổi của bạn:");
                alert("Đã lưu tuổi!");
                break;

            case '3':
                let tenHienThi = tenNguoiDung ? tenNguoiDung : "Chưa nhập";
                let tuoiHienThi = tuoiNguoiDung ? tuoiNguoiDung : "Chưa nhập";
                alert("Thông tin của bạn:\n- Tên: " + tenHienThi + "\n- Tuổi: " + tuoiHienThi);
                break;

            case '4':
                let soBCC = parseInt(prompt("Nhập một số để xem bảng cửu chương:"));
                if (!isNaN(soBCC)) {
                    let ketQuaBCC = "Bảng cửu chương của " + soBCC + ":\n";
                    for (let i = 1; i <= 10; i++) {
                        ketQuaBCC += soBCC + " x " + i + " = " + (soBCC * i) + "\n";
                    }
                    alert(ketQuaBCC);
                } else {
                    alert("Vui lòng nhập một số hợp lệ!");
                }
                break;

            case '5':
                let soChanLe = parseInt(prompt("Nhập một số để kiểm tra chẵn/lẻ:"));
                if (!isNaN(soChanLe)) {
                    if (soChanLe % 2 === 0) {
                        alert(soChanLe + " là số CHẴN.");
                    } else {
                        alert(soChanLe + " là số LẺ.");
                    }
                } else {
                    alert("Dữ liệu không hợp lệ!");
                }
                break;

            case '6':
                let N = parseInt(prompt("Nhập số N để tính tổng từ 1 đến N:"));
                if (!isNaN(N) && N > 0) {
                    let tong = 0;
                    for (let i = 1; i <= N; i++) {
                        tong += i;
                    }
                    alert("Tổng các số từ 1 đến " + N + " là: " + tong);
                } else {
                    alert("Vui lòng nhập số nguyên dương lớn hơn 0!");
                }
                break;

            case '7':
                let daySo = prompt("Nhập một dãy số (cách nhau bởi dấu phẩy, ví dụ: 2,4,6,8):");
                if (daySo) {
                    // Tách chuỗi thành mảng và nối lại với khoảng trắng để in ra đẹp hơn
                    let mangSo = daySo.split(",");
                    alert("Các số trong dãy bạn vừa nhập là:\n" + mangSo.join(" | "));
                }
                break;

            case '8':
                let soSNT = parseInt(prompt("Nhập một số để kiểm tra có phải số nguyên tố không:"));
                if (!isNaN(soSNT)) {
                    let laSNT = true;
                    if (soSNT < 2) {
                        laSNT = false;
                    } else {
                        for (let i = 2; i <= Math.sqrt(soSNT); i++) {
                            if (soSNT % i === 0) {
                                laSNT = false;
                                break;
                            }
                        }
                    }
                    if (laSNT) {
                        alert(soSNT + " LÀ số nguyên tố.");
                    } else {
                        alert(soSNT + " KHÔNG PHẢI là số nguyên tố.");
                    }
                } else {
                    alert("Dữ liệu không hợp lệ!");
                }
                break;

            case '9':
                let chuoiGoc = prompt("Nhập một chuỗi bất kỳ để đảo ngược:");
                if (chuoiGoc) {
                    // .split('') tách thành mảng ký tự -> .reverse() đảo ngược mảng -> .join('') ghép lại thành chuỗi
                    let chuoiDaoNguoc = chuoiGoc.split("").reverse().join("");
                    alert("Chuỗi ban đầu: " + chuoiGoc + "\nChuỗi đảo ngược: " + chuoiDaoNguoc);
                }
                break;

            case '10':
                alert("Đã thoát chương trình. Cảm ơn bạn!");
                break;

            default:
                alert("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 10.");
                break;
        }

    } while (luaChon !== '10' && luaChon !== null);
}