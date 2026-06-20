"use client";

import SupportHero from "./components/hero";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Title from "@/components/ui/title";
import { products } from "@/lib/products";
import { 
  ShieldCheck, 
  Wrench, 
  FileText, 
  PhoneCall, 
  Search, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

// Mock database for Serial Number search
interface SerialInfo {
  productName: string;
  registeredDate: string;
  expiryDate: string;
  duration: string;
  status: "Active" | "Expired";
}

const mockSerials: Record<string, SerialInfo> = {
  "EL-1002": {
    productName: "Quantum Wave Smart Oven",
    registeredDate: "January 15, 2025",
    expiryDate: "January 15, 2030",
    duration: "5 Years",
    status: "Active"
  },
  "EL-3004": {
    productName: "AeroSteam Induction Cooktop",
    registeredDate: "March 10, 2026",
    expiryDate: "March 10, 2031",
    duration: "5 Years",
    status: "Active"
  },
  "EL-4008": {
    productName: "AeroSilent Split System",
    registeredDate: "June 01, 2020",
    expiryDate: "June 01, 2025",
    duration: "5 Years",
    status: "Expired"
  }
};

export default function SupportPage() {
  // Warranty search states
  const [searchSerial, setSearchSerial] = useState("");
  const [searched, setSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<SerialInfo | null>(null);

  // Registration states
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regProductId, setRegProductId] = useState("");
  const [regSerial, setRegSerial] = useState("");
  const [regDate, setRegDate] = useState("");
  const [regSuccess, setRegSuccess] = useState(false);
  const [generatedSerial, setGeneratedSerial] = useState("");

  // Service Booking states
  const [bookName, setBookName] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookCity, setBookCity] = useState("Kathmandu");
  const [bookAddress, setBookAddress] = useState("");
  const [bookCategory, setBookCategory] = useState("Kitchen Appliances");
  const [bookIssue, setBookIssue] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookSuccess, setBookSuccess] = useState(false);

  // Active form section switcher
  const [activeForm, setActiveForm] = useState<"register" | "book">("register");

  // Handle serial query
  const handleSerialSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSerial = searchSerial.trim().toUpperCase();
    if (mockSerials[cleanSerial]) {
      setSearchResult(mockSerials[cleanSerial]);
    } else {
      setSearchResult(null);
    }
    setSearched(true);
  };

  // Generate a mock serial helper
  const handleAutoGenerateSerial = () => {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const mockCode = `EL-${randomDigits}`;
    setRegSerial(mockCode);
    setGeneratedSerial(mockCode);
  };

  // Handle Product registration submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPhone || !regProductId || !regSerial || !regDate) return;
    setRegSuccess(true);
  };

  // Reset Registration Form
  const handleResetReg = () => {
    setRegName("");
    setRegEmail("");
    setRegPhone("");
    setRegProductId("");
    setRegSerial("");
    setRegDate("");
    setGeneratedSerial("");
    setRegSuccess(false);
  };

  // Handle Service Booking submit
  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookPhone || !bookAddress || !bookIssue || !bookDate) return;
    setBookSuccess(true);
  };

  // Reset Booking Form
  const handleResetBook = () => {
    setBookName("");
    setBookPhone("");
    setBookAddress("");
    setBookIssue("");
    setBookDate("");
    setBookSuccess(false);
  };

  // Filter dropdown products
  const productOptions = products.map((p) => ({ id: p.id, name: p.name }));

  return (
    <div className="min-h-screen bg-white text-secondary selection:bg-cream-200">
      {/* Hero Header */}
      <SupportHero />

      {/* Navigation Shortcuts Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Box 1: Product Registration */}
            <button 
              onClick={() => {
                setActiveForm("register");
                const target = document.getElementById("action-form-section");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-8 text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-xs group flex flex-col justify-between h-56 cursor-pointer"
            >
              <div className="p-3 bg-white/70 backdrop-blur-xs text-zinc-800 rounded-2xl w-fit group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-zinc-900 mb-1.5 flex items-center gap-1.5">
                  Appliance Registration <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-zinc-650 font-light leading-relaxed">
                  Register your newly purchased home appliance to secure your 5-year official warranty parameters.
                </p>
              </div>
            </button>

            {/* Box 2: Book a Repair Technician */}
            <button 
              onClick={() => {
                setActiveForm("book");
                const target = document.getElementById("action-form-section");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-8 text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-xs group flex flex-col justify-between h-56 cursor-pointer"
            >
              <div className="p-3 bg-white/70 backdrop-blur-xs text-zinc-800 rounded-2xl w-fit group-hover:scale-105 transition-transform duration-300">
                <Wrench className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-zinc-900 mb-1.5 flex items-center gap-1.5">
                  Request Technician <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-zinc-650 font-light leading-relaxed">
                  Schedule an in-home service call or structural check by our Kathmandu & Lalitpur engineering team.
                </p>
              </div>
            </button>

            {/* Box 3: Downloads & Resource Manuals */}
            <a 
              href="/products"
              className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-8 text-left transition-all duration-300 hover:scale-[1.01] hover:shadow-xs group flex flex-col justify-between h-56 cursor-pointer block"
            >
              <div className="p-3 bg-white/70 backdrop-blur-xs text-zinc-800 rounded-2xl w-fit group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold text-zinc-900 mb-1.5 flex items-center gap-1.5">
                  Browse Manuals <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-zinc-650 font-light leading-relaxed">
                  Explore tech specifications, installation guidelines, and user operational manuals for all active ranges.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Interactive Warranty Search Box */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Title
            creamText="Instant Lookup"
            primaryText="Warranty Check"
            desc="Verify the status of your Elentra appliance warranty. Enter your serial number below (for testing, try EL-1002 or EL-4008)."
            className="mb-12"
          />

          {/* Search Form */}
          <form onSubmit={handleSerialSearch} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg mx-auto mb-12">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-zinc-400 absolute left-5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter serial number (e.g. EL-1002)"
                value={searchSerial}
                onChange={(e) => setSearchSerial(e.target.value)}
                className="w-full pl-13 pr-6 py-3.5 text-sm bg-zinc-50 focus:bg-white rounded-full focus:outline-none transition-all placeholder:text-zinc-400 placeholder:font-light focus:ring-1 focus:ring-cream-400 border-0"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-montserrat font-semibold uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer shrink-0"
            >
              Verify Status
            </button>
          </form>

          {/* Search Results Display */}
          <AnimatePresence mode="wait">
            {searched && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-lg mx-auto bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-8 text-left shadow-xs"
              >
                {searchResult ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
                      <div>
                        <span className="text-[10px] text-zinc-400 font-montserrat font-bold uppercase block tracking-wider mb-0.5">
                          Appliance Name
                        </span>
                        <h4 className="text-base font-semibold text-zinc-900 font-montserrat leading-tight">
                          {searchResult.productName}
                        </h4>
                      </div>
                      <span className={`text-[10px] font-bold font-montserrat uppercase tracking-wider py-1.5 px-3.5 rounded-full border ${
                        searchResult.status === "Active" 
                          ? "bg-emerald-50 text-emerald-600 border-emerald-500/20" 
                          : "bg-rose-50 text-rose-600 border-rose-500/20"
                      }`}>
                        {searchResult.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-montserrat">
                      <div>
                        <span className="text-[9px] text-zinc-400 uppercase tracking-widest block mb-0.5">Registration Date</span>
                        <span className="font-semibold text-zinc-800">{searchResult.registeredDate}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-zinc-400 uppercase tracking-widest block mb-0.5">Duration</span>
                        <span className="font-semibold text-zinc-800">{searchResult.duration}</span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-zinc-200/60">
                        <span className="text-[9px] text-zinc-400 uppercase tracking-widest block mb-0.5">
                          {searchResult.status === "Active" ? "Warranty Valid Until" : "Warranty Expired On"}
                        </span>
                        <span className={`font-semibold text-sm ${searchResult.status === "Active" ? "text-zinc-800" : "text-rose-600"}`}>
                          {searchResult.expiryDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/70 backdrop-blur-xs text-rose-600 rounded-2xl shrink-0">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 font-montserrat mb-1">
                        Serial Number Not Found
                      </h4>
                      <p className="text-xs text-zinc-650 font-light leading-relaxed">
                        We couldn't locate serial number <strong className="font-semibold text-zinc-700">"{searchSerial}"</strong> in our active database. Please confirm the code tag on the rear or side of the appliance, or register your product using the form below.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Forms Segment: Product Registration & Service Request */}
      <section id="action-form-section" className="py-24 bg-zinc-50/40 border-t border-zinc-100 relative">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header Switch Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-zinc-100 p-1.5 rounded-full flex items-center gap-1 shadow-xs">
              <button
                onClick={() => {
                  setActiveForm("register");
                  handleResetReg();
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-montserrat font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeForm === "register"
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Register Product
              </button>
              <button
                onClick={() => {
                  setActiveForm("book");
                  handleResetBook();
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-montserrat font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeForm === "book"
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Request Service
              </button>
            </div>
          </div>

          {/* Form Content Display */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
            <AnimatePresence mode="wait">
              
              {/* Product Registration Form */}
              {activeForm === "register" && (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {regSuccess ? (
                    <div className="text-center py-10 space-y-6">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/10">
                        <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-cormorant font-light text-zinc-950 tracking-wide">
                          Registration Complete
                        </h3>
                        <p className="text-sm text-zinc-550 font-light max-w-md mx-auto leading-relaxed">
                          Your appliance has been successfully logged under serial number <strong className="font-semibold text-zinc-700">{regSerial}</strong>. An official confirmation warranty slip was dispatched to <strong className="text-zinc-700 font-medium">{regEmail}</strong>.
                        </p>
                      </div>
                      <button
                        onClick={handleResetReg}
                        className="inline-flex text-xs font-montserrat font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-all py-3 px-8 border border-zinc-200 hover:border-zinc-400 rounded-full cursor-pointer hover:scale-102 active:scale-98"
                      >
                        Register Another Appliance
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegisterSubmit} className="space-y-6">
                      <div className="border-b border-zinc-100 pb-5 mb-8 text-center sm:text-left">
                        <h3 className="text-xl font-montserrat font-medium text-zinc-900 mb-1">
                          Appliance Warranty Registration
                        </h3>
                        <p className="text-xs text-zinc-400 font-light">
                          Log purchase dates to initialize your comprehensive 5-year coverage.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-zinc-400" /> Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Elena Rostova"
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="elena@example.com"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-zinc-400" /> Contact Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+977 9800000000"
                            value={regPhone}
                            onChange={(e) => setRegPhone(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Product Selection */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Selected Appliance
                          </label>
                          <select
                            value={regProductId}
                            onChange={(e) => setRegProductId(e.target.value)}
                            className="w-full px-5 py-3 text-sm rounded-2xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-cream-400 bg-zinc-50 transition-all text-zinc-700 font-light border-0 cursor-pointer"
                            required
                          >
                            <option value="">Choose your model</option>
                            {productOptions.map((opt) => (
                              <option key={opt.id} value={opt.id}>{opt.name}</option>
                            ))}
                          </select>
                        </div>

                        {/* Serial Number */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center">
                            <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" /> Serial Number
                            </label>
                            <button
                              type="button"
                              onClick={handleAutoGenerateSerial}
                              className="text-[9px] text-cream-600 hover:text-cream-800 font-semibold uppercase tracking-widest font-montserrat"
                            >
                              Auto-Generate
                            </button>
                          </div>
                          <input
                            type="text"
                            placeholder="EL-XXXX (from rear label)"
                            value={regSerial}
                            onChange={(e) => setRegSerial(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-mono focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                          {generatedSerial && (
                            <span className="text-[10px] text-emerald-600 block mt-0.5 font-montserrat">Mock code "{generatedSerial}" generated successfully.</span>
                          )}
                        </div>

                        {/* Date of purchase */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" /> Date of Purchase
                          </label>
                          <input
                            type="date"
                            value={regDate}
                            onChange={(e) => setRegDate(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all text-zinc-600 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-6 text-center sm:text-right">
                        <button
                          type="submit"
                          className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-montserrat font-semibold uppercase tracking-widest py-3.5 px-10 rounded-full transition-all duration-300 hover:scale-102 hover:shadow-xs active:scale-98 cursor-pointer"
                        >
                          Register Appliance
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}

              {/* Service & Technician Booking Form */}
              {activeForm === "book" && (
                <motion.div
                  key="book-form"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {bookSuccess ? (
                    <div className="text-center py-10 space-y-6">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/10">
                        <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-cormorant font-light text-zinc-950 tracking-wide">
                          Service Scheduled
                        </h3>
                        <p className="text-sm text-zinc-550 font-light max-w-md mx-auto leading-relaxed">
                          Your request has been logged. An engineer from our <strong className="text-zinc-850 font-medium">{bookCity}</strong> center will reach out to you within 24 hours at <strong className="text-zinc-700 font-medium">{bookPhone}</strong> to confirm your slot for <strong className="text-zinc-700 font-medium">{bookDate}</strong>.
                        </p>
                      </div>
                      <button
                        onClick={handleResetBook}
                        className="inline-flex text-xs font-montserrat font-semibold uppercase tracking-widest text-zinc-700 hover:text-zinc-900 transition-all py-3 px-8 border border-zinc-200 hover:border-zinc-400 rounded-full cursor-pointer hover:scale-102 active:scale-98"
                      >
                        Schedule Another Visit
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookSubmit} className="space-y-6">
                      <div className="border-b border-zinc-100 pb-5 mb-8 text-center sm:text-left">
                        <h3 className="text-xl font-montserrat font-medium text-zinc-900 mb-1">
                          Schedule Engineering Visit
                        </h3>
                        <p className="text-xs text-zinc-400 font-light">
                          Request a repair check, component clean, or standard operational review in Kathmandu & Lalitpur.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-zinc-400" /> Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Vasilis Papas"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-zinc-400" /> Contact Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+977 9800000000"
                            value={bookPhone}
                            onChange={(e) => setBookPhone(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* City Selector */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Area / City
                          </label>
                          <select
                            value={bookCity}
                            onChange={(e) => setBookCity(e.target.value)}
                            className="w-full px-5 py-3 text-sm rounded-2xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-cream-400 bg-zinc-50 transition-all text-zinc-700 font-light border-0 cursor-pointer"
                            required
                          >
                            <option value="Kathmandu">Kathmandu</option>
                            <option value="Lalitpur">Lalitpur</option>
                            <option value="Bhaktapur">Bhaktapur</option>
                            <option value="Pokhara">Pokhara</option>
                          </select>
                        </div>

                        {/* Detailed Address */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Street Address
                          </label>
                          <input
                            type="text"
                            placeholder="Maharajgunj, Ward 3"
                            value={bookAddress}
                            onChange={(e) => setBookAddress(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Category Selector */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> Appliance Category
                          </label>
                          <select
                            value={bookCategory}
                            onChange={(e) => setBookCategory(e.target.value)}
                            className="w-full px-5 py-3 text-sm rounded-2xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-cream-400 bg-zinc-50 transition-all text-zinc-700 font-light border-0 cursor-pointer"
                            required
                          >
                            <option value="Kitchen Appliances">Kitchen Appliances</option>
                            <option value="Refrigeration">Refrigeration</option>
                            <option value="Climate Control">Climate Control</option>
                            <option value="Laundry Care">Laundry Care</option>
                            <option value="Cleaning">Cleaning / Robotics</option>
                            <option value="Smart Home">Smart Home Systems</option>
                          </select>
                        </div>

                        {/* Date of Appointment */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" /> Preferred Date
                          </label>
                          <input
                            type="date"
                            value={bookDate}
                            onChange={(e) => setBookDate(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all text-zinc-650 font-light focus:ring-1 focus:ring-cream-400 border-0"
                            required
                          />
                        </div>

                        {/* Issue Description */}
                        <div className="space-y-1.5 sm:col-span-2">
                          <label className="text-[10px] font-montserrat font-medium text-zinc-450 uppercase tracking-widest flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-zinc-400" /> Problem Details / Request Notes
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Please describe the issue or the maintenance check details..."
                            value={bookIssue}
                            onChange={(e) => setBookIssue(e.target.value)}
                            className="w-full px-5 py-3 text-sm bg-zinc-50 focus:bg-white rounded-2xl focus:outline-none transition-all placeholder:text-zinc-300 font-light border-0 resize-none focus:ring-1 focus:ring-cream-400"
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-6 text-center sm:text-right">
                        <button
                          type="submit"
                          className="bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-montserrat font-semibold uppercase tracking-widest py-3.5 px-10 rounded-full transition-all duration-300 hover:scale-102 hover:shadow-xs active:scale-98 cursor-pointer"
                        >
                          Schedule Engineer
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Customer Hotline & Showroom Contact Segment */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Kathmandu HQ */}
            <div className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-7 space-y-4 transition-all duration-300 hover:scale-[1.01]">
              <span className="text-[10px] font-montserrat font-semibold text-cream-600 uppercase tracking-widest block">
                Official HQ
              </span>
              <h4 className="text-lg font-montserrat font-semibold text-zinc-900 leading-tight">
                Kathmandu Support
              </h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Maharajgunj, Kathmandu<br />
                Opposite Showroom Center
              </p>
              <div className="pt-3 border-t border-zinc-200/60 space-y-1.5 text-xs font-montserrat">
                <a href="tel:+97714000000" className="flex items-center gap-2 text-zinc-750 hover:text-cream-600 font-medium">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" /> +977 1 4000000
                </a>
                <a href="mailto:info@elentra.com.np" className="flex items-center gap-2 text-zinc-555 hover:text-cream-600">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" /> info@elentra.com.np
                </a>
              </div>
            </div>

            {/* Card 2: Lalitpur Center */}
            <div className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-7 space-y-4 transition-all duration-300 hover:scale-[1.01]">
              <span className="text-[10px] font-montserrat font-semibold text-cream-600 uppercase tracking-widest block">
                Regional Hub
              </span>
              <h4 className="text-lg font-montserrat font-semibold text-zinc-900 leading-tight">
                Lalitpur Showroom
              </h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Pulchowk, Lalitpur<br />
                Next to Service Annex
              </p>
              <div className="pt-3 border-t border-zinc-200/60 space-y-1.5 text-xs font-montserrat">
                <a href="tel:+97715000000" className="flex items-center gap-2 text-zinc-750 hover:text-cream-600 font-medium">
                  <Phone className="w-3.5 h-3.5 text-zinc-450" /> +977 1 5000000
                </a>
                <a href="mailto:sales@elentra.com.np" className="flex items-center gap-2 text-zinc-555 hover:text-cream-600">
                  <Mail className="w-3.5 h-3.5 text-zinc-455" /> sales@elentra.com.np
                </a>
              </div>
            </div>

            {/* Card 3: Support Hours */}
            <div className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-7 space-y-4 transition-all duration-300 hover:scale-[1.01]">
              <span className="text-[10px] font-montserrat font-semibold text-cream-600 uppercase tracking-widest block">
                Availability
              </span>
              <h4 className="text-lg font-montserrat font-semibold text-zinc-900 leading-tight">
                Technical Hours
              </h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                In-home bookings run Sunday through Friday. Emergency lines active.
              </p>
              <div className="pt-3 border-t border-zinc-200/60 text-xs text-zinc-650 space-y-1 font-montserrat">
                <p><strong className="font-semibold text-zinc-700">Sun - Fri:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong className="font-semibold text-zinc-700">Saturday:</strong> Closed (Emergency only)</p>
              </div>
            </div>

            {/* Card 4: Immediate Help */}
            <div className="bg-gradient-to-b from-[#FAF8F5] to-[#ececf2] rounded-[2rem] p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] h-full">
              <div>
                <span className="text-[10px] font-montserrat font-semibold text-cream-600 uppercase tracking-widest block mb-2">
                  Emergency Line
                </span>
                <h4 className="text-xl font-cormorant font-light text-zinc-900 leading-tight mb-2">
                  Appliance Helpline
                </h4>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-4">
                  Call for immediate safety guidelines or leak mitigation protocols.
                </p>
              </div>
              <a 
                href="tel:+97714000000" 
                className="flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-montserrat font-semibold uppercase tracking-wider py-3 rounded-2xl transition-all duration-300 hover:scale-102 cursor-pointer active:scale-98 shadow-xs"
              >
                <PhoneCall className="w-4 h-4" /> Call Helpline
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
