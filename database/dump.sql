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

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
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
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
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
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
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
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
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
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
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
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
2	35	1	2999
3	36	1	2999
4	37	1	2999
5	38	1	2999
6	39	1	2999
7	40	1	2999
8	41	1	2999
9	42	1	2999
10	43	2	2595
11	44	2	2595
12	45	2	2595
13	46	2	2595
14	47	2	2595
15	48	2	2595
16	49	2	2595
17	50	2	2595
18	51	2	2595
19	52	3	2900
20	53	3	2900
21	54	1	2999
22	55	1	2999
23	56	1	2999
24	57	1	2999
25	58	4	999
26	59	4	999
27	60	1	2999
28	61	4	999
29	62	1	2999
30	63	1	2999
32	86	1	2999
33	87	1	2999
34	88	1	2999
35	89	1	2999
36	90	1	2999
37	91	1	2999
38	92	1	2999
39	93	1	2999
40	94	1	2999
41	95	2	2595
42	96	2	2595
44	99	2	2595
46	100	2	2595
54	100	2	2595
55	100	2	2595
56	100	2	2595
57	100	2	2595
58	100	2	2595
59	101	1	2999
61	101	1	2999
62	101	1	2999
67	101	1	2999
68	102	1	2999
69	102	1	2999
70	102	2	2595
71	102	1	2999
72	102	1	2999
73	102	1	2999
74	102	1	2999
75	103	3	2900
76	103	3	2900
77	104	3	2900
78	104	3	2900
79	104	3	2900
80	104	3	2900
81	104	3	2900
82	104	3	2900
83	104	3	2900
84	104	3	2900
85	104	3	2900
86	104	3	2900
87	104	3	2900
88	104	3	2900
89	104	3	2900
90	104	3	2900
91	104	3	2900
92	104	3	2900
93	104	3	2900
94	102	3	2900
95	105	1	2999
96	105	2	2595
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-03-11 01:24:16.286956+00
2	2020-03-11 01:26:21.063365+00
3	2020-03-11 01:27:41.309183+00
4	2020-03-11 01:29:25.918907+00
5	2020-03-11 01:29:36.927461+00
6	2020-03-11 01:38:53.685748+00
7	2020-03-11 01:39:53.058185+00
8	2020-03-11 01:43:10.287155+00
9	2020-03-11 01:44:01.315408+00
10	2020-03-11 01:44:49.11848+00
11	2020-03-11 01:45:06.557854+00
12	2020-03-11 01:45:14.195306+00
13	2020-03-11 01:45:31.768258+00
14	2020-03-11 01:46:01.226366+00
15	2020-03-11 01:47:33.432627+00
16	2020-03-11 01:47:57.73593+00
17	2020-03-11 01:50:02.810388+00
18	2020-03-11 01:51:13.59196+00
19	2020-03-11 01:52:17.304153+00
20	2020-03-11 01:54:26.104004+00
21	2020-03-11 01:55:12.438145+00
22	2020-03-11 01:56:03.343465+00
23	2020-03-11 01:56:21.239407+00
24	2020-03-11 01:58:36.367434+00
25	2020-03-11 02:01:05.902076+00
26	2020-03-11 02:01:22.00889+00
27	2020-03-11 02:02:36.018568+00
28	2020-03-11 02:03:29.489361+00
29	2020-03-11 02:03:43.73959+00
30	2020-03-11 02:11:34.684031+00
31	2020-03-11 02:15:59.524578+00
32	2020-03-11 02:18:42.121153+00
33	2020-03-11 02:18:57.408356+00
34	2020-03-11 02:21:10.991706+00
35	2020-03-11 02:21:45.962427+00
36	2020-03-11 02:22:19.596295+00
37	2020-03-11 02:30:27.976912+00
38	2020-03-11 02:35:53.580093+00
39	2020-03-11 02:37:55.628461+00
40	2020-03-11 02:39:49.02173+00
41	2020-03-11 02:40:43.507144+00
42	2020-03-11 02:41:15.308261+00
43	2020-03-11 02:46:31.087785+00
44	2020-03-11 02:47:47.27803+00
45	2020-03-11 02:49:07.844062+00
46	2020-03-11 02:50:12.184454+00
47	2020-03-11 02:50:46.624939+00
48	2020-03-11 02:51:07.936531+00
49	2020-03-11 02:52:14.998483+00
50	2020-03-11 02:53:07.06706+00
51	2020-03-11 02:53:48.438119+00
52	2020-03-11 02:54:46.458826+00
53	2020-03-11 02:55:09.04796+00
54	2020-03-11 02:55:42.645226+00
55	2020-03-11 02:56:07.411659+00
56	2020-03-11 02:56:21.037992+00
57	2020-03-11 02:56:44.841444+00
58	2020-03-11 03:01:02.748252+00
59	2020-03-11 03:01:41.151183+00
60	2020-03-11 03:13:16.228136+00
61	2020-03-11 03:16:33.100475+00
62	2020-03-11 03:16:39.811706+00
63	2020-03-11 03:22:28.987147+00
64	2020-03-11 03:34:07.767501+00
65	2020-03-11 03:34:28.066162+00
66	2020-03-11 03:36:41.502074+00
67	2020-03-11 03:42:05.917833+00
68	2020-03-11 03:42:32.650649+00
69	2020-03-11 03:42:47.568508+00
70	2020-03-11 03:43:03.325002+00
71	2020-03-11 03:43:32.570861+00
72	2020-03-11 03:43:54.077277+00
73	2020-03-11 03:44:25.229018+00
74	2020-03-11 03:44:37.210254+00
75	2020-03-11 03:44:53.637239+00
76	2020-03-11 03:46:14.954747+00
77	2020-03-11 03:48:29.978538+00
78	2020-03-11 03:49:25.696879+00
79	2020-03-11 03:50:12.261408+00
80	2020-03-11 03:52:02.43945+00
81	2020-03-11 03:52:11.827411+00
82	2020-03-11 03:52:41.540266+00
83	2020-03-11 03:53:00.038502+00
84	2020-03-11 03:53:45.927723+00
85	2020-03-11 03:53:59.719464+00
86	2020-03-11 03:57:59.910395+00
87	2020-03-11 03:59:18.503076+00
88	2020-03-11 03:59:51.824548+00
89	2020-03-11 04:10:41.065196+00
90	2020-03-11 04:10:56.839318+00
91	2020-03-11 04:13:30.195608+00
92	2020-03-11 04:13:43.699625+00
93	2020-03-11 04:14:24.278062+00
94	2020-03-11 04:16:14.638511+00
95	2020-03-11 04:16:47.00915+00
96	2020-03-11 04:19:43.947248+00
97	2020-03-11 06:51:50.275847+00
98	2020-03-11 06:52:42.198383+00
99	2020-03-11 06:52:54.862356+00
100	2020-03-11 07:00:44.743893+00
101	2020-03-11 17:30:32.791218+00
102	2020-03-11 19:19:14.613218+00
103	2020-03-11 19:27:24.82547+00
104	2020-03-11 19:28:30.265014+00
105	2020-03-11 22:14:59.151323+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Shake Weight	2999	/images/shake-weight.jpg	Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
2	ShamWow	2595	/images/shamwow.jpg	It's like a chamois, towel, and sponge, all in one! Soaks up to 10x it's weight in any liquid!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
3	Snuggie	2900	/images/snuggie.jpg	Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
4	Wax Vac	999	/images/wax-vac.jpg	Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
5	Ostrich Pillow	9900	/images/ostrich-pillow.jpg	Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
6	Tater Mitts	830	/images/tater-mitts.jpg	8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.	Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse 90's. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock\\n.Aesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 96, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 105, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 1, false);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

