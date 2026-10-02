"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MonitorPlay, Flame, Smartphone, Apple, Download, Settings, Play } from "lucide-react"

const tabs = [
  {
    id: "smart-tv",
    label: "Smart TV",
    icon: MonitorPlay,
    steps: [
      {
        icon: Download,
        title: "Download IPTV Player App",
        description: "Open your Smart TV app store and install IPTV Smarters Pro, TiviMate, or any compatible IPTV player for your IPTV Trends subscription.",
      },
      {
        icon: Settings,
        title: "Enter IPTV Trends Login",
        description: "Open the IPTV player and enter the Xtream Codes login credentials we send via WhatsApp after you buy your IPTV Trends subscription.",
      },
      {
        icon: Play,
        title: "Start Watching IPTV",
        description: "Browse 21,000+ IPTV channels, pick your favorite sports, movies, or series, and enjoy buffer-free 4K IPTV streaming.",
      },
    ],
  },
  {
    id: "firestick",
    label: "Firestick",
    icon: Flame,
    steps: [
      {
        icon: Download,
        title: "Install IPTV on Firestick",
        description: "Go to Firestick settings, enable 'Apps from Unknown Sources', then install the Downloader app to sideload your IPTV Trends player.",
      },
      {
        icon: Settings,
        title: "Configure IPTV Trends",
        description: "Use the Downloader app to install IPTV Smarters Pro. Enter the IPTV Trends credentials we provide after purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Firestick",
        description: "Launch the app and start streaming all 21,000+ IPTV Trends channels and VOD content on your Firestick instantly.",
      },
    ],
  },
  {
    id: "android",
    label: "Android / MAG",
    icon: Smartphone,
    steps: [
      {
        icon: Download,
        title: "Download Android IPTV App",
        description: "Install IPTV Smarters Pro or TiviMate from the Google Play Store on your Android device, tablet, or MAG box for IPTV Trends.",
      },
      {
        icon: Settings,
        title: "Add IPTV Trends Playlist",
        description: "Open the IPTV app and add your M3U URL or Xtream Codes login that IPTV Trends provides after your subscription purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Android",
        description: "All IPTV Trends channels and VOD content load automatically. Enjoy lag-free 4K IPTV streaming on Android.",
      },
    ],
  },
  {
    id: "apple",
    label: "Apple / iOS",
    icon: Apple,
    steps: [
      {
        icon: Download,
        title: "Get IPTV App for iOS",
        description: "Download IPTV Smarters or GSE Smart IPTV from the Apple App Store on your iPhone, iPad, or Apple TV to use IPTV Trends.",
      },
      {
        icon: Settings,
        title: "Login to IPTV Trends",
        description: "Open the IPTV app and enter the Xtream Codes API login details provided after your IPTV Trends subscription purchase.",
      },
      {
        icon: Play,
        title: "Watch IPTV on Apple Devices",
        description: "Stream IPTV Trends on the go with your Apple device. All 21,000+ IPTV channels and 65,000+ VOD titles at your fingertips.",
      },
    ],
  },
]

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState("smart-tv")

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="eyebrow mb-3">Setup guide</span>
          <h2 className="text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
            How to Set Up <span className="text-gradient">IPTV Trends</span> on Any Device
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Install IPTV Trends in 3 easy steps on Smart TV, Firestick, Android, iOS, or MAG Box. No technical skills needed. Our IPTV setup guide works for IPTV Smarters, TiviMate, and all popular IPTV players.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div role="tablist" aria-label="Choose your device" className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`setup-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="install-tab-pill"
                  className="neon-glow absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <tab.icon className="relative h-4 w-4" />
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Steps: every device guide is in the HTML for search engines; only the active one is shown */}
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <div
              key={tab.id}
              id={`setup-${tab.id}`}
              role="tabpanel"
              aria-label={`How to set up IPTV Trends on ${tab.label}`}
              hidden={!isActive}
            >
              <h3 className="sr-only">How to set up IPTV Trends on {tab.label}</h3>
              <ol className="mt-10 grid gap-6 md:grid-cols-3">
                {tab.steps.map((step, index) => (
                  <motion.li
                    key={`${tab.id}-${step.title}-${isActive}`}
                    initial={isActive ? { opacity: 0, y: 24 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="glass group relative list-none rounded-2xl p-6 hover:border-primary/30"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        {index + 1}
                      </span>
                      <step.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    {index < tab.steps.length - 1 && isActive && (
                      <motion.span
                        aria-hidden="true"
                        className="absolute -right-5 top-1/2 hidden h-0.5 w-4 origin-left bg-gradient-to-r from-primary to-transparent md:block"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4 + index * 0.15, duration: 0.4 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}
