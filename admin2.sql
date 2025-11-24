-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2025 at 07:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'arka', '$2b$10$9hhZlcc.TOm0WtDh9SdI6.gzJnnDlyAOvEpNtqPweag9mUDERG45.');

-- --------------------------------------------------------

--
-- Table structure for table `component`
--

CREATE TABLE `component` (
  `id` int(11) NOT NULL,
  `judul` varchar(191) NOT NULL,
  `harga` int(11) NOT NULL,
  `deskripsi` varchar(191) NOT NULL,
  `gambar` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `component`
--

INSERT INTO `component` (`id`, `judul`, `harga`, `deskripsi`, `gambar`) VALUES
(1, 'chain ring', 12345678, 'ini adalah', '/uploads/1763307798796-chain.png'),
(3, 'DropBar ST10', 275000, 'Dropbar ST10 adalah ', '/uploads/1763452098494-ST10.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `frame`
--

CREATE TABLE `frame` (
  `id` int(11) NOT NULL,
  `judul` varchar(191) NOT NULL,
  `harga` int(11) NOT NULL,
  `deskripsi` varchar(191) NOT NULL,
  `gambar` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `frame`
--

INSERT INTO `frame` (`id`, `judul`, `harga`, `deskripsi`, `gambar`) VALUES
(1, 'dolan', 12345678, 'frame dolan adalah', '/uploads/1763303673434-dolan.png'),
(7, 'S-works', 12000000, 'Frame S-works dilengkapi', '/uploads/1763307838194-sworks.png');

-- --------------------------------------------------------

--
-- Table structure for table `wheel`
--

CREATE TABLE `wheel` (
  `id` int(11) NOT NULL,
  `judul` varchar(191) NOT NULL,
  `harga` int(11) NOT NULL,
  `deskripsi` varchar(191) NOT NULL,
  `gambar` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wheel`
--

INSERT INTO `wheel` (`id`, `judul`, `harga`, `deskripsi`, `gambar`) VALUES
(1, 'fweafwf', 345432342, 'asfaefe', '/uploads/1763307753134-1763307431456-1763303910833-kai.png'),
(2, 'mavic', 12345678, 'mavic adalah', '/uploads/1763342283042-mavic.png');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('01442763-64e2-4be6-8f1d-f5d15d9a46c0', '738513276f09d4a49ff4b9246646ffde63e228000a552d00e9283793ac765bd8', '2025-11-12 04:39:34.620', '20251112043933_init', NULL, NULL, '2025-11-12 04:39:33.840', 1),
('2643658d-b048-4cea-ae73-e9d47990f6bc', '52b8272ba7cc7aa0b314effc352f51d9fe0ec80fe607bf4071595ac64f844b79', '2025-11-16 12:51:02.652', '20251116125101_npx_prisma_migrate_dev', NULL, NULL, '2025-11-16 12:51:01.354', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_username_key` (`username`);

--
-- Indexes for table `component`
--
ALTER TABLE `component`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frame`
--
ALTER TABLE `frame`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wheel`
--
ALTER TABLE `wheel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `component`
--
ALTER TABLE `component`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `frame`
--
ALTER TABLE `frame`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wheel`
--
ALTER TABLE `wheel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
