import InteractiveModel from '@/components/page-technical/interactive-model/InteractiveModel'
import React from 'react'
import { existsSync } from 'fs'
import { join } from 'path'
import { CiRuler, CiWavePulse1, CiDesktop, CiLocationArrow1, CiBatteryFull, CiCamera, CiServer, CiMonitor } from 'react-icons/ci';

export const generateMetadata = () => {
    return {
        title: `Technical`
    }
}

const ModelPage = async () => {
    //Check if there is a 3d model
    const filePath = existsSync(
        join(process.cwd(), 'public', '3dmodel', 'model.glb')
    )
        ? '3dmodel/model.glb'
        : ''
    const path = filePath

    return (
        <div className="min-h-screen">
            <section className="relative">
                <div className="mt-16 px-3 max-w-full">
                    <InteractiveModel path={path} />
                </div>
            </section>
  
        <section className="py-16 border-t">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiRuler className="text-2xl" />
                  <h3 className="text-xl font-light">Hull Design</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>Length: 140 cm</li>
                  <li>Width: 90 cm</li>
                  <li>Weight: 20 kg (base)</li>
                  <li>Trimaran Configuration</li>
                  <li>PLA with Fiberglass Reinforcement</li>
                  <li>Modular Component Design</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiWavePulse1 className="text-2xl" />
                  <h3 className="text-xl font-light">Propulsion</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>2x T500 Main Thrusters</li>
                  <li>2x T200 Tunnel Thrusters</li>
                  <li>12V System Operation</li>
                  <li>360° Maneuverability</li>
                  <li>Three Degrees of Freedom</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiBatteryFull className="text-2xl" />
                  <h3 className="text-xl font-light">Power System</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>2x 12V 20Ah LiFePO4 (30A BMS)</li>
                  <li>1x 12V 50Ah LiFePO4 (50A BMS)</li>
                  <li>Bluetooth Monitoring</li>
                  <li>Extended Runtime Capability</li>
                  <li>Smart Power Management</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiLocationArrow1 className="text-2xl" />
                  <h3 className="text-xl font-light">Navigation</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>XSENS MTi-680G RTK GNSS/INS</li>
                  <li>Sub-1cm Position Accuracy</li>
                  <li>Advanced Inertial Sensing</li>
                  <li>Real-time Kinematics</li>
                  <li>Celerways Stratus 5G Connection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12">Sensor Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiCamera className="text-2xl" />
                  <h3 className="text-xl font-light">Vision System</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>Stereolabs ZEDX Camera</li>
                  <li>Stereo Depth Mapping</li>
                  <li>YOLOv8 Object Detection</li>
                  <li>Real-time Object Tracking</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiMonitor className="text-2xl" />
                  <h3 className="text-xl font-light">LiDAR Systems</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>ROBIN E LiDAR (120° FOV)</li>
                  <li>Velodyne VLP-16 (360° Coverage)</li>
                  <li>0.1° Resolution</li>
                  <li>100m Detection Range</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiServer className="text-2xl" />
                  <h3 className="text-xl font-light">Data Processing</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>NVIDIA Jetson AGX Orin</li>
                  <li>Real-time Sensor Fusion</li>
                  <li>Processing</li>
                  <li>Multi-sensor Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl mb-12">Software Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiDesktop className="text-2xl" />
                  <h3 className="text-xl font-light">Core Systems</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>ROS2 Humble Hawksbill Framework</li>
                  <li>NVIDIA Isaac ROS Integration</li>
                  <li>Python & C++ Implementation</li>
                  <li>Behavior Tree Architecture</li>
                  <li>Modular Node Design</li>
                  <li>Custom Message Types</li>
                </ul>
              </div>
  
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CiServer className="text-2xl" />
                  <h3 className="text-xl font-light">Control Systems</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>PD Controllers for Navigation</li>
                  <li>Autopath Action Server</li>
                  <li>Keep Position Server</li>
                  <li>GPS-IMU Fusion</li>
                  <li>LiDAR-Camera Fusion</li>
                  <li>Manual/Auto Mode Switching</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-4">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl mb-12">Development Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <img src="https://images.ctfassets.net/7x0gozge9rg6/3LauYHYwqtItwYHVIu9wCG/1a66928d8cf34473b6f0f8deb680bc45/image.png" alt="Portal to Triton" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <img src="https://images.ctfassets.net/7x0gozge9rg6/4vCBw293RtpYNfRDSjLIRo/26cf4520d0e365c4c521655c4a077979/IMG_5116.jpg?h=250" alt="Design Process" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <img src="https://images.ctfassets.net/7x0gozge9rg6/2clsjuY80gjRYhHaZNwGlv/f37d096a4a0e7702a6de7c2d9d7b3b8c/IMG_1812.jpg?h=250" alt="Image of Triton" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
}

export default ModelPage