--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-01-23 16:46:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 19036)
-- Name: Boards; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Boards" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title character varying NOT NULL,
    color character varying DEFAULT '#ffffff'::character varying,
    userid uuid
);


--
-- TOC entry 219 (class 1259 OID 19050)
-- Name: Items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Items" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying NOT NULL,
    completed boolean DEFAULT false,
    boardsid uuid
);


--
-- TOC entry 217 (class 1259 OID 19026)
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Users" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


--
-- TOC entry 4863 (class 0 OID 19036)
-- Dependencies: 218
-- Data for Name: Boards; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Boards" (id, title, color, userid) FROM stdin;
a71d05cc-ec63-4e74-b644-fa83bb8cd9d3	Satu	Biru	49404a7f-0f22-41a4-b950-b7ebb489e45c
\.


--
-- TOC entry 4864 (class 0 OID 19050)
-- Dependencies: 219
-- Data for Name: Items; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Items" (id, name, completed, boardsid) FROM stdin;
c82ca173-774a-47b9-9e1d-b24945fafe5c	asdasdadasd	f	\N
776080e7-b7b2-411b-b768-93cb60e09da8	asdasdadasd	f	\N
b9fcf0f9-155d-4933-8fba-81f7812db4e9	asdasdadasd	f	\N
\.


--
-- TOC entry 4862 (class 0 OID 19026)
-- Dependencies: 217
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Users" (id, username, password) FROM stdin;
49404a7f-0f22-41a4-b950-b7ebb489e45c	aldi	$2a$10$cUlJ.WlnpyRv1lavTqNfoOsE7w/0PfpdmnespjSlCxwzPfbjuvdN2
\.


--
-- TOC entry 4712 (class 2606 OID 19044)
-- Name: Boards Board_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Boards"
    ADD CONSTRAINT "Board_pkey" PRIMARY KEY (id);


--
-- TOC entry 4714 (class 2606 OID 19058)
-- Name: Items Item_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Item_pkey" PRIMARY KEY (id);


--
-- TOC entry 4708 (class 2606 OID 19033)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 19035)
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- TOC entry 4715 (class 2606 OID 19045)
-- Name: Boards Board_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Boards"
    ADD CONSTRAINT "Board_userid_fkey" FOREIGN KEY (userid) REFERENCES public."Users"(id);


--
-- TOC entry 4716 (class 2606 OID 19059)
-- Name: Items Item_checklistid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Item_checklistid_fkey" FOREIGN KEY (boardsid) REFERENCES public."Boards"(id);


-- Completed on 2025-01-23 16:46:28

--
-- PostgreSQL database dump complete
--

