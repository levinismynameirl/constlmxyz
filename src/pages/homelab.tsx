import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Homelab.module.css'

interface LogEntry {
  date: string
  title: string
  body: string
}

interface ServiceItem {
  name: string
  purpose: string
}

interface SegmentItem {
  name: string
  access: string
  desc: string
}

const segments: SegmentItem[] = [
  {
    name: 'Personal',
    access: 'Full',
    desc: 'Primary devices with unrestricted internal access and full service availability.',
  },
  {
    name: 'Family',
    access: 'Filtered',
    desc: 'Family devices with DNS-level filtering and limited access to internal services.',
  },
  {
    name: 'Guest',
    access: 'Isolated',
    desc: 'Internet-only access. Fully isolated from internal networks and services.',
  },
  {
    name: 'Public Services',
    access: 'DMZ',
    desc: 'Websites, APIs, and public-facing infrastructure. Exposed through a reverse proxy with strict rules.',
  },
]

const services: ServiceItem[] = [
  { name: 'Websites & APIs', purpose: 'Public-facing web services hosted and served from the lab' },
  { name: 'Reverse proxy', purpose: 'TLS termination, routing, and access control for all exposed services' },
  { name: 'DNS filtering', purpose: 'Network-wide ad and malware blocking at the DNS level' },
  { name: 'Monitoring', purpose: 'System health, network metrics, and service uptime dashboards' },
  { name: 'Containers', purpose: 'Isolated environments for running services without interference' },
  { name: 'VPN', purpose: 'Encrypted remote access to the internal network from anywhere' },
  { name: 'Storage', purpose: 'Centralized file storage and backups with redundancy' },
  { name: 'ML sandbox', purpose: 'Local compute for training and experimenting with models' },
]

const securityLayers = [
  'Stateful firewalling with deny-by-default policies between all zones',
  'Intrusion detection and prevention monitoring for known threat patterns',
  'DNS-level blocking of ads, trackers, and known malicious domains',
  'Public services isolated in a DMZ, never directly exposed to internal networks',
  'Guest network has internet access only, with no visibility into the rest of the system',
  'All external access tunneled through an encrypted VPN',
]

const skills = [
  'Network architecture and VLAN design',
  'Firewall policy and zone-based security',
  'System administration and service management',
  'Infrastructure planning and documentation',
  'Reverse proxy configuration and TLS management',
  'Monitoring, observability, and incident awareness',
  'Responsible public exposure of services',
  'Hardware selection and physical system design',
]

const log: LogEntry[] = [
  {
    date: '2026-02',
    title: 'starting out',
    body: 'Researching hardware options and planning the initial architecture. Defining network zones, choosing between used enterprise gear and custom builds. The goal is to start minimal and expand deliberately.',
  },
]

export default function Homelab() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>

        {/* Header */}
        <FadeIn>
          <p className={styles.label}>// homelab</p>
          <h1 className={styles.title}>Mountain Top</h1>
          <p className={styles.subtitle}>
            A personal homelab and home network core, designed to act as the
            brain of an entire home network. Built for learning and real-world
            practice in networking, cybersecurity, system administration,
            DevOps, and self-hosted infrastructure.
          </p>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>planning / early build</span>
          </div>
        </FadeIn>

        {/* Design Philosophy */}
        <FadeIn delay={0.1}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>design philosophy</h2>
            <p className={styles.text}>
              The core idea is simple: the router is just a gateway to the
              internet. It does not filter traffic, enforce policies, or run
              services. All of that is handled by the homelab. Access points
              provide Wi-Fi and broadcast multiple SSIDs, but they do not make
              decisions either. Every piece of intelligence, security, and
              service management lives in one place.
            </p>
            <p className={styles.text}>
              This separation of concerns means each component does exactly one
              thing well. The router routes. The access points transmit. The
              homelab thinks. This makes the system easier to maintain, easier
              to secure, and easier to scale as requirements change.
            </p>
          </div>
        </FadeIn>

        {/* Architecture Diagram */}
        <FadeIn delay={0.15}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>high-level architecture</h2>
            <p className={styles.text}>
              All traffic flows through the homelab before reaching any device
              or service. Public services are isolated in a DMZ zone and never
              share a network with personal devices.
            </p>
            <div className={styles.diagram}>
              <div className={styles.diagramFlow}>
                <div className={styles.diagramNode}>
                  <span className={styles.diagramIcon}>&#9729;</span>
                  <span className={styles.diagramNodeLabel}>Internet</span>
                </div>
                <span className={styles.diagramArrow}>&#8595;</span>
                <div className={styles.diagramNode}>
                  <span className={styles.diagramIcon}>&#9649;</span>
                  <span className={styles.diagramNodeLabel}>Gateway Router</span>
                  <span className={styles.diagramNote}>routing only</span>
                </div>
                <span className={styles.diagramArrow}>&#8595;</span>
                <div className={`${styles.diagramNode} ${styles.diagramNodeCore}`}>
                  <span className={styles.diagramIcon}>&#9881;</span>
                  <span className={styles.diagramNodeLabel}>Mountain Top</span>
                  <span className={styles.diagramNote}>firewall &middot; DNS &middot; services &middot; VLANs</span>
                </div>
                <span className={styles.diagramArrow}>&#8595;</span>
                <div className={styles.diagramNode}>
                  <span className={styles.diagramIcon}>&#8942;</span>
                  <span className={styles.diagramNodeLabel}>Managed Switch</span>
                  <span className={styles.diagramNote}>VLAN trunk</span>
                </div>
                <span className={styles.diagramArrow}>&#8595;</span>
                <div className={styles.diagramBranch}>
                  <div className={styles.diagramLeaf}>
                    <span className={styles.diagramLeafIcon}>&#9784;</span>
                    <span className={styles.diagramLeafLabel}>Access Points</span>
                    <span className={styles.diagramNote}>Personal / Family / Guest</span>
                  </div>
                  <div className={styles.diagramLeaf}>
                    <span className={styles.diagramLeafIcon}>&#9883;</span>
                    <span className={styles.diagramLeafLabel}>Public Services</span>
                    <span className={styles.diagramNote}>DMZ zone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Network Segmentation */}
        <FadeIn delay={0.2}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>network segmentation</h2>
            <p className={styles.text}>
              The network is divided into isolated zones using VLANs. Each zone
              has its own SSID, its own firewall rules, and its own level of
              access to internal services. Devices on one network cannot see or
              reach devices on another unless explicitly allowed. This is the
              foundation of the security model.
            </p>
            <div className={styles.segmentGrid}>
              {segments.map((seg) => (
                <div key={seg.name} className={styles.segmentCard}>
                  <div className={styles.segmentHeader}>
                    <span className={styles.segmentName}>{seg.name}</span>
                    <span className={styles.segmentAccess}>{seg.access}</span>
                  </div>
                  <p className={styles.segmentDesc}>{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Security Model */}
        <FadeIn delay={0.25}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>security model</h2>
            <p className={styles.text}>
              Security is not a feature added on top. It is the architecture
              itself. Every zone is firewalled. Every service is contained.
              Nothing is exposed without intent.
            </p>
            <ul className={styles.goalsList}>
              {securityLayers.map((layer) => (
                <li key={layer} className={styles.goalItem}>
                  <span className={styles.bullet} />
                  {layer}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Services */}
        <FadeIn delay={0.3}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>services</h2>
            <p className={styles.text}>
              Everything the homelab runs, from public websites to internal
              monitoring. Each service is containerized and isolated.
            </p>
            <StaggerContainer className={styles.servicesGrid}>
              {services.map((s) => (
                <StaggerItem key={s.name}>
                  <div className={styles.serviceCard}>
                    <span className={styles.serviceName}>{s.name}</span>
                    <span className={styles.serviceDetail}>{s.purpose}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Monitoring */}
        <FadeIn delay={0.35}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>monitoring & observability</h2>
            <p className={styles.text}>
              System health, network traffic, and service uptime are tracked
              continuously. Dashboards provide real-time visibility into
              resource utilization, bandwidth, and alert states across all
              zones. The goal is to know when something breaks before it
              matters.
            </p>
            <p className={styles.text}>
              Metrics are collected from every running service and aggregated
              into a central monitoring stack. Alerts can trigger on thresholds
              like high CPU, disk pressure, or service downtime.
            </p>
          </div>
        </FadeIn>

        {/* Physical Design */}
        <FadeIn delay={0.4}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>physical design</h2>
            <p className={styles.text}>
              The hardware is designed to be compact, maintainable, and
              visible. Small form factor nodes keep the footprint minimal.
              An LCD or small display is planned for at-a-glance system
              status without needing to SSH in. A KVM or touchscreen interface
              allows direct local control when needed.
            </p>
            <p className={styles.text}>
              The emphasis is on a clean, deliberate build. Not a pile of
              cables and blinking lights in a closet, but something
              intentional that can be maintained and expanded without
              rebuilding from scratch.
            </p>
          </div>
        </FadeIn>

        {/* Expansion */}
        <FadeIn delay={0.45}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>expansion & future plans</h2>
            <p className={styles.text}>
              The architecture is designed to grow without being redesigned.
              Compute can be upgraded or added as standalone nodes. New services
              slot into the existing network zones. The foundation stays the
              same even as the hardware and workloads change.
            </p>
            <ul className={styles.goalsList}>
              <li className={styles.goalItem}>
                <span className={styles.bullet} />
                Upgrade to more powerful hardware as workloads demand it
              </li>
              <li className={styles.goalItem}>
                <span className={styles.bullet} />
                Add dedicated nodes for GPU compute and ML training
              </li>
              <li className={styles.goalItem}>
                <span className={styles.bullet} />
                Explore container orchestration and clustering
              </li>
              <li className={styles.goalItem}>
                <span className={styles.bullet} />
                Deeper work in intrusion detection and network forensics
              </li>
              <li className={styles.goalItem}>
                <span className={styles.bullet} />
                Virtualization for testing isolated environments
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* What This Demonstrates */}
        <FadeIn delay={0.5}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>what this project demonstrates</h2>
            <StaggerContainer className={styles.skillsGrid}>
              {skills.map((skill) => (
                <StaggerItem key={skill}>
                  <span className={styles.skillTag}>{skill}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* Build Log */}
        <FadeIn delay={0.55}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>build log</h2>
            <p className={styles.logIntro}>
              Updates as things progress. Newest first.
            </p>
            <div className={styles.timeline}>
              {log.map((entry, i) => (
                <div key={i} className={styles.logEntry}>
                  <div className={styles.logHeader}>
                    <span className={styles.logDate}>{entry.date}</span>
                    <span className={styles.logTitle}>{entry.title}</span>
                  </div>
                  <p className={styles.logBody}>{entry.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  )
}

