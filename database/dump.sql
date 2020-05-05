--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_fk4;
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_fk3;
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_fk2;
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_fk1;
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_fk0;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_fk2;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_fk1;
ALTER TABLE ONLY public.products DROP CONSTRAINT products_fk0;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_fk0;
ALTER TABLE ONLY public."frameColor" DROP CONSTRAINT "frameColor_fk0";
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_fk1";
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_fk0";
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_pk;
ALTER TABLE ONLY public.styles DROP CONSTRAINT styles_name_key;
ALTER TABLE ONLY public.products DROP CONSTRAINT "products_productSKU_key";
ALTER TABLE ONLY public.products DROP CONSTRAINT products_pk;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pk;
ALTER TABLE ONLY public."lensType" DROP CONSTRAINT "lensType_type_key";
ALTER TABLE ONLY public."lensType" DROP CONSTRAINT "lensType_pk";
ALTER TABLE ONLY public."glassesType" DROP CONSTRAINT "glassesType_pk";
ALTER TABLE ONLY public.gender DROP CONSTRAINT gender_pk;
ALTER TABLE ONLY public.gender DROP CONSTRAINT gender_gender_key;
ALTER TABLE ONLY public."frameStyle" DROP CONSTRAINT "frameStyle_style_key";
ALTER TABLE ONLY public."frameStyle" DROP CONSTRAINT "frameStyle_pk";
ALTER TABLE ONLY public."frameMaterial" DROP CONSTRAINT "frameMaterial_pk";
ALTER TABLE ONLY public."frameMaterial" DROP CONSTRAINT "frameMaterial_material_key";
ALTER TABLE ONLY public."frameColor" DROP CONSTRAINT "frameColor_pk";
ALTER TABLE ONLY public."frameColor" DROP CONSTRAINT "frameColor_color_key";
ALTER TABLE ONLY public."frameColor" DROP CONSTRAINT "frameColor_colorName_key";
ALTER TABLE ONLY public."colorCategory" DROP CONSTRAINT "colorCategory_pk";
ALTER TABLE ONLY public."colorCategory" DROP CONSTRAINT "colorCategory_category_key";
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pk;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pk";
ALTER TABLE ONLY public."badgeStatus" DROP CONSTRAINT "badgeStatus_pk";
ALTER TABLE ONLY public."badgeStatus" DROP CONSTRAINT "badgeStatus_badgeStatus_key";
ALTER TABLE public.styles ALTER COLUMN "styleId" DROP DEFAULT;
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public."lensType" ALTER COLUMN "lensTypeId" DROP DEFAULT;
ALTER TABLE public."glassesType" ALTER COLUMN "glassesTypeId" DROP DEFAULT;
ALTER TABLE public.gender ALTER COLUMN "genderId" DROP DEFAULT;
ALTER TABLE public."frameStyle" ALTER COLUMN "frameStyleId" DROP DEFAULT;
ALTER TABLE public."frameMaterial" ALTER COLUMN "frameMaterialId" DROP DEFAULT;
ALTER TABLE public."frameColor" ALTER COLUMN "frameColorId" DROP DEFAULT;
ALTER TABLE public."colorCategory" ALTER COLUMN "colorCategoryId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
ALTER TABLE public."badgeStatus" ALTER COLUMN "badgeStatusId" DROP DEFAULT;
DROP SEQUENCE public."styles_styleId_seq";
DROP TABLE public.styles;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."lensType_lensTypeId_seq";
DROP TABLE public."lensType";
DROP SEQUENCE public."glassesType_glassesTypeId_seq";
DROP TABLE public."glassesType";
DROP SEQUENCE public."gender_genderId_seq";
DROP TABLE public.gender;
DROP SEQUENCE public."frameStyle_frameStyleId_seq";
DROP TABLE public."frameStyle";
DROP SEQUENCE public."frameMaterial_material_seq";
DROP SEQUENCE public."frameMaterial_frameMaterialId_seq";
DROP TABLE public."frameMaterial";
DROP SEQUENCE public."frameColor_frameColorId_seq";
DROP TABLE public."frameColor";
DROP SEQUENCE public."colorCategory_colorCategoryId_seq";
DROP TABLE public."colorCategory";
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP SEQUENCE public."badgeStatus_badgeStatusId_seq";
DROP TABLE public."badgeStatus";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: badgeStatus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."badgeStatus" (
    "badgeStatusId" integer NOT NULL,
    "badgeStatus" text NOT NULL
);


--
-- Name: badgeStatus_badgeStatusId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."badgeStatus_badgeStatusId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: badgeStatus_badgeStatusId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."badgeStatus_badgeStatusId_seq" OWNED BY public."badgeStatus"."badgeStatusId";


--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2020-05-04 23:32:03.139185+00'::timestamp with time zone NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: colorCategory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."colorCategory" (
    "colorCategoryId" integer NOT NULL,
    category text NOT NULL
);


--
-- Name: colorCategory_colorCategoryId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."colorCategory_colorCategoryId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: colorCategory_colorCategoryId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."colorCategory_colorCategoryId_seq" OWNED BY public."colorCategory"."colorCategoryId";


--
-- Name: frameColor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."frameColor" (
    "frameColorId" integer NOT NULL,
    "colorAbbr" text NOT NULL,
    "colorCategoryId" integer NOT NULL,
    "colorName" text NOT NULL
);


--
-- Name: frameColor_frameColorId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frameColor_frameColorId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frameColor_frameColorId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frameColor_frameColorId_seq" OWNED BY public."frameColor"."frameColorId";


--
-- Name: frameMaterial; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."frameMaterial" (
    "frameMaterialId" integer NOT NULL,
    material text NOT NULL
);


--
-- Name: frameMaterial_frameMaterialId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frameMaterial_frameMaterialId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frameMaterial_frameMaterialId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frameMaterial_frameMaterialId_seq" OWNED BY public."frameMaterial"."frameMaterialId";


--
-- Name: frameMaterial_material_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frameMaterial_material_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frameMaterial_material_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frameMaterial_material_seq" OWNED BY public."frameMaterial".material;


--
-- Name: frameStyle; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."frameStyle" (
    "frameStyleId" integer NOT NULL,
    style text NOT NULL
);


--
-- Name: frameStyle_frameStyleId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."frameStyle_frameStyleId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: frameStyle_frameStyleId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."frameStyle_frameStyleId_seq" OWNED BY public."frameStyle"."frameStyleId";


--
-- Name: gender; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gender (
    "genderId" integer NOT NULL,
    gender text NOT NULL
);


--
-- Name: gender_genderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."gender_genderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: gender_genderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."gender_genderId_seq" OWNED BY public.gender."genderId";


--
-- Name: glassesType; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."glassesType" (
    "glassesTypeId" integer NOT NULL,
    "glassesType" text NOT NULL
);


--
-- Name: glassesType_glassesTypeId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."glassesType_glassesTypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: glassesType_glassesTypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."glassesType_glassesTypeId_seq" OWNED BY public."glassesType"."glassesTypeId";


--
-- Name: lensType; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."lensType" (
    "lensTypeId" integer NOT NULL,
    type text NOT NULL
);


--
-- Name: lensType_lensTypeId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."lensType_lensTypeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lensType_lensTypeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."lensType_lensTypeId_seq" OWNED BY public."lensType"."lensTypeId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "billingAddress" text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2020-05-04 23:32:03.139185+00'::timestamp with time zone NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    "styleId" integer NOT NULL,
    "productSKU" text NOT NULL,
    "frameColorId" integer NOT NULL,
    "badgeStatusId" integer NOT NULL,
    image1 path,
    image2 path
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: styles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.styles (
    "styleId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    description text NOT NULL,
    "glassesTypeId" integer NOT NULL,
    "genderId" integer NOT NULL,
    "lensTypeId" integer NOT NULL,
    "frameMaterialId" integer NOT NULL,
    "frameStyleId" integer NOT NULL,
    "availColors" json NOT NULL,
    dimensions json NOT NULL
);


--
-- Name: styles_styleId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."styles_styleId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: styles_styleId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."styles_styleId_seq" OWNED BY public.styles."styleId";


--
-- Name: badgeStatus badgeStatusId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."badgeStatus" ALTER COLUMN "badgeStatusId" SET DEFAULT nextval('public."badgeStatus_badgeStatusId_seq"'::regclass);


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: colorCategory colorCategoryId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."colorCategory" ALTER COLUMN "colorCategoryId" SET DEFAULT nextval('public."colorCategory_colorCategoryId_seq"'::regclass);


--
-- Name: frameColor frameColorId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameColor" ALTER COLUMN "frameColorId" SET DEFAULT nextval('public."frameColor_frameColorId_seq"'::regclass);


--
-- Name: frameMaterial frameMaterialId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameMaterial" ALTER COLUMN "frameMaterialId" SET DEFAULT nextval('public."frameMaterial_frameMaterialId_seq"'::regclass);


--
-- Name: frameStyle frameStyleId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameStyle" ALTER COLUMN "frameStyleId" SET DEFAULT nextval('public."frameStyle_frameStyleId_seq"'::regclass);


--
-- Name: gender genderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender ALTER COLUMN "genderId" SET DEFAULT nextval('public."gender_genderId_seq"'::regclass);


--
-- Name: glassesType glassesTypeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."glassesType" ALTER COLUMN "glassesTypeId" SET DEFAULT nextval('public."glassesType_glassesTypeId_seq"'::regclass);


--
-- Name: lensType lensTypeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."lensType" ALTER COLUMN "lensTypeId" SET DEFAULT nextval('public."lensType_lensTypeId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Name: styles styleId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles ALTER COLUMN "styleId" SET DEFAULT nextval('public."styles_styleId_seq"'::regclass);


--
-- Data for Name: badgeStatus; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."badgeStatus" ("badgeStatusId", "badgeStatus") FROM stdin;
1	none
2	new
3	blue light
4	polarized
\.


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId") FROM stdin;
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
\.


--
-- Data for Name: colorCategory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."colorCategory" ("colorCategoryId", category) FROM stdin;
1	black
2	blue
3	brown
4	clear
5	gold
6	silver
\.


--
-- Data for Name: frameColor; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."frameColor" ("frameColorId", "colorAbbr", "colorCategoryId", "colorName") FROM stdin;
1	b	1	black
2	c	4	clear
3	gg	5	garnet gold
4	g	5	gold
5	mb	1	matte black
6	nb	2	navy blue
7	og	5	onyx gold
8	os	6	onyx silver
9	s	6	silver
10	tb	3	tortoise brown
\.


--
-- Data for Name: frameMaterial; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."frameMaterial" ("frameMaterialId", material) FROM stdin;
1	metal
2	plastic
3	titanium
4	acetate
5	polycarbonate
\.


--
-- Data for Name: frameStyle; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."frameStyle" ("frameStyleId", style) FROM stdin;
1	aviator
2	cat-eye
3	rimless
4	round
5	semi-rimless
6	square
\.


--
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.gender ("genderId", gender) FROM stdin;
2	male
3	female
4	unisex
\.


--
-- Data for Name: glassesType; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."glassesType" ("glassesTypeId", "glassesType") FROM stdin;
1	optical
2	sunglasses
\.


--
-- Data for Name: lensType; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."lensType" ("lensTypeId", type) FROM stdin;
1	regular
2	blue light
3	polarized
4	mirrored
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "billingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", "styleId", "productSKU", "frameColorId", "badgeStatusId", image1, image2) FROM stdin;
1	1	lcf-19a-045_c	2	1	\N	\N
2	1	lcf-19a-045_tb	10	2	\N	\N
3	2	lmf-19s-378_b	1	3	\N	\N
4	2	lmf-19s-378_nb	6	4	\N	\N
5	3	lmf-19s-378_gg	3	1	\N	\N
6	3	lmf-19s-378_og	7	2	\N	\N
7	4	mmf-18s-095_mb	5	3	\N	\N
8	5	mrf-18s-027_og	7	4	\N	\N
9	6	umn-20s-048_g	4	1	\N	\N
10	6	umn-20s-048_og	7	2	\N	\N
11	7	urf-19a-036_os	8	3	\N	\N
12	7	urf-19a-036_s	9	4	\N	\N
13	8	elliot_g	4	1	\N	\N
14	8	elliot_s	9	2	\N	\N
15	9	nevada_g	4	3	\N	\N
16	9	nevada_s	9	4	\N	\N
17	10	palma_g	4	1	\N	\N
18	10	palma_s	9	2	\N	\N
19	11	ariel_b	1	3	\N	\N
20	11	ariel_g	4	4	\N	\N
21	12	morrell_g	4	1	\N	\N
22	12	morrell_s	9	2	\N	\N
23	13	scout_g	4	3	\N	\N
24	13	scout_s	9	4	\N	\N
\.


--
-- Data for Name: styles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.styles ("styleId", name, price, description, "glassesTypeId", "genderId", "lensTypeId", "frameMaterialId", "frameStyleId", "availColors", dimensions) FROM stdin;
1	lcf-19a-045	12000	Love to rock a classic look? LCF-19A-045 is the perfect pair of blue light glasses for you! LCF-19A-045 combines a classic look with five barrel hinges, lightweight polycarbonate frame and blue light blocking lenses.	1	3	2	5	4	["c","tb"]	{"LW": 50, "LH": 44, "FW": 141.5, "T": 140}
2	lmf-17s-u159	12000	Break barriers and start a style revolution with these black steel and acetate eyeglasses. This classically versatile frame features a black stainless steel frame front with a keyhole nose bridge. High quality Italian hinges connect the hand crafted premium acetate beige colored temples. Let the fusion of different earth elements permeate your presence so you can break free from boring and claim your style independence.	1	3	1	4	4	["b","n"]	{"LW": 46, "LH": 42, "FW": 132.5, "T": 140}
3	lmf-19s-378	12000	Set inside the classic round eyewire of LMF-19S-378 is a modern update: an ultra-thin, complementary coil of acetate. Made in Italy.	1	3	1	4	4	["gg","og"]	{"LW": 51, "LH": 46, "FW": 138, "T": 150}
4	mmf-18s-095	12000	Versatility comes easy when you’ve got a frame like MMF-18S-095. Constructed in Japan, this frame features ultra-thin (and almost invisible) metalwork encircling each round lens.	1	2	2	1	4	["mb"]	{"LW": 52, "LH": 47, "FW": 140, "T": 150}
5	mrf-18s-027	12000	On the hunt for a classic wire frame look with a little edge? Look no further than MRF-18S-027's soft angled curves and slightly flattened rims.	1	2	1	1	6	["og"]	{"LW": 54, "LH": 45, "FW": 140, "T": 144}
6	umn-20s-048	12000	With its classy finish, UMN-20S-048's square lenses and unique nose bridge reach a whole new level of "eyecatching". Adjustable nose pads and lightweight temple arms keep this iconic look both functional and fashionable.	1	2	2	3	6	["g","og"]	{"LW": 56, "LH": 41, "FW": 138, "T": 150}
7	urf-19a-036	12000	Become a 21st-century saint of style with URF-19A-036. The contrast between sleek, metal and retro outsize shaped lenses makes these full-rim eyeglasses uniquely trendy. The smooth, streamlined design is complemented by a fine nose bridge and black temple tips to create a frame that gives an instant, edgy style boost.	1	2	1	1	4	["os","s"]	{"LW": 47.5, "LH": 40, "FW": 132, "T": 150}
8	elliot	8000	The Elliot puts a modern spin on the classic aviator with its round shape. This modern style is suitable for women. Choose from the pink and yellow lens! If you are looking for the absolute best in style and affordability, iWear has the styles that you want.	2	3	4	1	1	["g","s"]	{"LW": 62, "LH": 59, "FW": 130, "T": 149}
9	nevada	8000	Step into the sun with confidence in the round, mirrored Nevada frame. These shades give a modern look to a retro-style frame. Choose from the green, blue, or pink lenses, each enveloped in a classy gold metal frame to ensure you'll stand out in every crowd.	2	3	4	1	4	["g","s"]	{"LW": 53, "LH": 50, "FW": 135, "T": 148}
10	palma	8000	Palma is a trendsetting angular cat-eye design combined with sleek, contemporary lines. Slightly oversized for ultimate protection for your eyes!	2	3	1	1	2	["g","s"]	{"LW": 61, "LH": 49, "FW": 146, "T": 145}
11	ariel	8000	Ariel is a stylish and retro design suitable for all face shapes. The double bridge bar gives these sunglasses an even more retro, vintage look! Choose from gold, silver or black frame and take your vintage style to the next level.	2	2	3	5	1	["b","g"]	{"LW": 54, "LH": 50, "FW": 134, "T": 148}
12	morrell	8000	Change up your look with these Morrell sunglasses. The modern and metal detailing add a funky twist to this stylish, acetate frame.	2	2	3	1	5	["g","s"]	{"LW": 50, "LH": 46, "FW": 141, "T": 138}
13	scout	8000	The classic aviator style is captured beautifully in these double-barred, metal frame and is teamed with a polarized lens that will cut through glare magnificently. Polarized lenses offer you ultimate protection while enjoying outdoor activities. These aviator shades are not the ones you want to miss out on! Classic design for suited for every occasion.	2	2	3	1	1	["g","s"]	{"LW": 60, "LH": 53, "FW": 147, "T": 145}
\.


--
-- Name: badgeStatus_badgeStatusId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."badgeStatus_badgeStatusId_seq"', 4, true);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 1, false);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 1, true);


--
-- Name: colorCategory_colorCategoryId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."colorCategory_colorCategoryId_seq"', 6, true);


--
-- Name: frameColor_frameColorId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frameColor_frameColorId_seq"', 10, true);


--
-- Name: frameMaterial_frameMaterialId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frameMaterial_frameMaterialId_seq"', 5, true);


--
-- Name: frameMaterial_material_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frameMaterial_material_seq"', 1, false);


--
-- Name: frameStyle_frameStyleId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."frameStyle_frameStyleId_seq"', 6, true);


--
-- Name: gender_genderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."gender_genderId_seq"', 4, true);


--
-- Name: glassesType_glassesTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."glassesType_glassesTypeId_seq"', 2, true);


--
-- Name: lensType_lensTypeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."lensType_lensTypeId_seq"', 4, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 1, false);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 24, true);


--
-- Name: styles_styleId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."styles_styleId_seq"', 13, true);


--
-- Name: badgeStatus badgeStatus_badgeStatus_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."badgeStatus"
    ADD CONSTRAINT "badgeStatus_badgeStatus_key" UNIQUE ("badgeStatus");


--
-- Name: badgeStatus badgeStatus_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."badgeStatus"
    ADD CONSTRAINT "badgeStatus_pk" PRIMARY KEY ("badgeStatusId");


--
-- Name: cartItems cartItems_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pk" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pk PRIMARY KEY ("cartId");


--
-- Name: colorCategory colorCategory_category_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."colorCategory"
    ADD CONSTRAINT "colorCategory_category_key" UNIQUE (category);


--
-- Name: colorCategory colorCategory_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."colorCategory"
    ADD CONSTRAINT "colorCategory_pk" PRIMARY KEY ("colorCategoryId");


--
-- Name: frameColor frameColor_colorName_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameColor"
    ADD CONSTRAINT "frameColor_colorName_key" UNIQUE ("colorName");


--
-- Name: frameColor frameColor_color_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameColor"
    ADD CONSTRAINT "frameColor_color_key" UNIQUE ("colorAbbr");


--
-- Name: frameColor frameColor_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameColor"
    ADD CONSTRAINT "frameColor_pk" PRIMARY KEY ("frameColorId");


--
-- Name: frameMaterial frameMaterial_material_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameMaterial"
    ADD CONSTRAINT "frameMaterial_material_key" UNIQUE (material);


--
-- Name: frameMaterial frameMaterial_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameMaterial"
    ADD CONSTRAINT "frameMaterial_pk" PRIMARY KEY ("frameMaterialId");


--
-- Name: frameStyle frameStyle_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameStyle"
    ADD CONSTRAINT "frameStyle_pk" PRIMARY KEY ("frameStyleId");


--
-- Name: frameStyle frameStyle_style_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameStyle"
    ADD CONSTRAINT "frameStyle_style_key" UNIQUE (style);


--
-- Name: gender gender_gender_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_gender_key UNIQUE (gender);


--
-- Name: gender gender_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pk PRIMARY KEY ("genderId");


--
-- Name: glassesType glassesType_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."glassesType"
    ADD CONSTRAINT "glassesType_pk" PRIMARY KEY ("glassesTypeId");


--
-- Name: lensType lensType_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."lensType"
    ADD CONSTRAINT "lensType_pk" PRIMARY KEY ("lensTypeId");


--
-- Name: lensType lensType_type_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."lensType"
    ADD CONSTRAINT "lensType_type_key" UNIQUE (type);


--
-- Name: orders orders_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pk PRIMARY KEY ("orderId");


--
-- Name: products products_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk PRIMARY KEY ("productId");


--
-- Name: products products_productSKU_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_productSKU_key" UNIQUE ("productSKU");


--
-- Name: styles styles_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_name_key UNIQUE (name);


--
-- Name: styles styles_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pk PRIMARY KEY ("styleId");


--
-- Name: cartItems cartItems_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_fk0" FOREIGN KEY ("cartId") REFERENCES public.carts("cartId");


--
-- Name: cartItems cartItems_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_fk1" FOREIGN KEY ("productId") REFERENCES public.products("productId");


--
-- Name: frameColor frameColor_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."frameColor"
    ADD CONSTRAINT "frameColor_fk0" FOREIGN KEY ("colorCategoryId") REFERENCES public."colorCategory"("colorCategoryId");


--
-- Name: orders orders_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_fk0 FOREIGN KEY ("cartId") REFERENCES public.carts("cartId");


--
-- Name: products products_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_fk0 FOREIGN KEY ("styleId") REFERENCES public.styles("styleId");


--
-- Name: products products_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_fk1 FOREIGN KEY ("frameColorId") REFERENCES public."frameColor"("frameColorId");


--
-- Name: products products_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_fk2 FOREIGN KEY ("badgeStatusId") REFERENCES public."badgeStatus"("badgeStatusId");


--
-- Name: styles styles_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_fk0 FOREIGN KEY ("glassesTypeId") REFERENCES public."glassesType"("glassesTypeId");


--
-- Name: styles styles_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_fk1 FOREIGN KEY ("genderId") REFERENCES public.gender("genderId");


--
-- Name: styles styles_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_fk2 FOREIGN KEY ("lensTypeId") REFERENCES public."lensType"("lensTypeId");


--
-- Name: styles styles_fk3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_fk3 FOREIGN KEY ("frameMaterialId") REFERENCES public."frameMaterial"("frameMaterialId");


--
-- Name: styles styles_fk4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_fk4 FOREIGN KEY ("frameStyleId") REFERENCES public."frameStyle"("frameStyleId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

