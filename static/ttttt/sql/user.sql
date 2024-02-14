-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2022-12-27 08:22:22
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET
SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET
time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `uploadfiles`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user`
(
    `username`
    text
    NOT
    NULL,
    `password`
    text
    NOT
    NULL,
    `rootpassword`
    text
    NOT
    NULL,
    `email`
    text
    NOT
    NULL,
    `test`
    text
    NOT
    NULL,
    `join_date`
    date
    NOT
    NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`username`, `password`, `rootpassword`, `email`, `test`, `join_date`)
VALUES ('root', '6367c48dd193d56ea7b0baad25b19455e529f5ee', '98ef16ddf6a80d792a0a807ac365b2638b3c0125',
        'nahum201001@163.com', '', '2022-12-12'),
       ('444', '6367c48dd193d56ea7b0baad25b19455e529f5ee', '98ef16ddf6a80d792a0a807ac365b2638b3c0125',
        '2470919389@qq.com', '', '2022-12-12'),
       ('nahum', '895b317c76b8e504c2fb32dbb4420178f60ce321', '98ef16ddf6a80d792a0a807ac365b2638b3c0125',
        'nahum201001@163.com', '1', '2022-12-12'),
       ('111', '6367c48dd193d56ea7b0baad25b19455e529f5ee', '98ef16ddf6a80d792a0a807ac365b2638b3c0125',
        '1050076072@qq.com', '', '2022-12-12'),
       ('777', '974a0fd2dcc55c1fb3a90d3ca09902bffd8ebac8', '98ef16ddf6a80d792a0a807ac365b2638b3c0125',
        'nahum201001@163.com', '', '2022-12-25'),
       ('1001', '974a0fd2dcc55c1fb3a90d3ca09902bffd8ebac8', '', 'nahum201001@163.com', '1', '2022-12-27');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
