"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Khám phá", href: "/#bo-suu-tap" },
  { label: "Cách hoạt động", href: "/#cach-hoat-dong" },
  { label: "Câu chuyện", href: "/#cau-chuyen" },
  { label: "Hành trình vị Việt", href: "/#hanh-trinh" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href="/" aria-label="Chạm Việt – Trang chủ">
          <Image
            className="wordmark__logo"
            src="/icon-192.png"
            alt=""
            width={44}
            height={44}
            preload
            unoptimized
          />
          <span>
            <strong>CHẠM VIỆT</strong>
            <small>MẢNH VỊ</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <Link className="header-collection" href="/collection">
          Bộ sưu tập
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Điều hướng trên điện thoại"
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
