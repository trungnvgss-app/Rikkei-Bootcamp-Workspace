CREATE DATABASE NIPPON_COFFEE;

USE NIPPON_COFFEE;
CREATE TABLE Chi_Nhanh (
	ma_chi_nhanh INT PRIMARY KEY,
	ten_chi_nhanh VARCHAR(100) NOT NULL,
	khu_vuc VARCHAR(255) NOT NULL
);

CREATE TABLE Nhan_Vien (
	ma_nhan_vien VARCHAR(10) PRIMARY KEY,
    ten_nhan_vien VARCHAR(200) NOT NULL,
    luong_theo_gio INT CHECK (luong_theo_gio>900),
    ma_chi_nhanh_lam_viec INT ,
    FOREIGN KEY (ma_chi_nhanh_lam_viec) REFERENCES Chi_Nhanh(ma_chi_nhanh)
);

ALTER TABLE Nhan_Vien
	ADD ngay_sinh DATE;


