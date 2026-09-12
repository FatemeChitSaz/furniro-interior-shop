# Furniro — Furniture eCommerce Website

پیاده‌سازی چندصفحه‌ای (Multi-page) یک فروشگاه اینترنتی مبلمان، بر اساس طرح Figma
"eCommerce Website UI KIT — Interior Landing Page", با **HTML + Tailwind CSS + Vanilla JavaScript**.

## 🔗 Live Demo

[furniro-interior-shop.vercel.app](https://furniro-interior-shop.vercel.app/)

## 🎨 طرح Figma

[eCommerce Website | Web Page Design | UI KIT](https://www.figma.com/design/UYmHnQu7bNwMiyqtEytFbX/eCommerce-Website)

## 📁 ساختار پروژه

```
furniro-site/
├── index.html               # صفحه اصلی (Home)
├── shop.html                 # لیست محصولات
├── single-product.html       # جزئیات یک محصول
├── product-comparison.html   # مقایسه دو محصول
├── cart.html                 # سبد خرید
├── checkout.html             # تسویه‌حساب
├── contact.html              # تماس با ما
├── blog.html                 # وبلاگ
├── about.html                # درباره ما
├── input.css                 # فایل ورودی Tailwind
├── dist/
│   └── output.css            # خروجی build شده‌ی Tailwind
└── imgs/                     # تصاویر محصولات، بنرها، لوگو
```

هر صفحه یک فایل مستقل (standalone) است.

## 🚀 راه‌اندازی

```bash
npm install tailwindcss @tailwindcss/cli
npx tailwindcss -i ./input.css -o ./dist/output.css --watch
```

## ☁️ دیپلوی روی Vercel

| تنظیم | مقدار |
|---|---|
| Build Command | `npx tailwindcss -i ./input.css -o ./dist/output.css` |
| Output Directory | `.` |
| Install Command | `npm install` |

## 🎨 پالت رنگی و فونت

| متغیر | مقدار |
|---|---|
| رنگ اصلی (طلایی) | `#B88E2F` |
| رنگ کرمی پس‌زمینه | `#FFF3E3` / `#F9F1E7` / `#FAF3EA` |
| رنگ متن اصلی | `#333333` |
| رنگ متن کمکی | `#555555` / `#9F9F9F` |
| بج تخفیف (Sale) | `#E97171` |
| بج جدید (New) | `#2EC1AC` |
| فونت عنوان‌ها | Montserrat |
| فونت متن | Poppins |

## 📄 صفحات پیاده‌سازی‌شده

| صفحه | وضعیت |
|---|---|
| Home | ✅ |
| Shop | ✅ |
| Single Product | ✅ |
| Product Comparison | ✅ |
| Cart | ✅ |
| Checkout | ✅ |
| Contact | ✅ |
| Blog | ✅ |
| About | ✅ |
