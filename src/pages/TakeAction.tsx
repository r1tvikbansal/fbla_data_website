import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, Droplets, Building, Trees, Download, Share2, Mail, Filter, Wind } from 'lucide-react';

const maskEffectiveness = [
  { type: 'No Mask', effectiveness: 0 },
  { type: 'Cloth Mask', effectiveness: 30 },
  { type: 'N-95 Mask', effectiveness: 95 },
];

const TakeAction: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-white">
      <section className="w-full bg-white/90 border-b border-moss-green section-padding pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-forest-green"
          >
            You Can Help Clear the Air
          </motion.h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Simple actions that make a big difference for NYC's air quality
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {/* N-95 Masks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-forest-green mr-3" />
                  <h2 className="text-2xl font-bold text-forest-green">Wear N-95 Masks</h2>
                </div>
                <p className="text-medium-gray mb-4">
                  During high-pollution days, N-95 masks can reduce PM2.5 inhalation by up to 95%. 
                  Keep one handy for wildfire smoke events.
                </p>
                <p className="text-sm text-medium-gray">
                  <strong>Cost:</strong> ~$1 per mask | <strong>Effectiveness:</strong> 95% PM2.5 reduction
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-forest-green mb-4">Mask Effectiveness Comparison</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={maskEffectiveness}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="effectiveness" fill="#24523c" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-medium-gray mt-2">Source: Stanford Research Institute</p>
              </div>
            </div>
          </motion.div>

          {/* Water Misting Stations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Droplets className="w-8 h-8 text-forest-green mr-3" />
                  <h2 className="text-2xl font-bold text-forest-green">Support Water Misting Stations</h2>
                </div>
                <p className="text-medium-gray mb-4">
                  Water misting stations at bus stops and high-traffic areas can reduce airborne 
                  particulates by up to 30%. Advocate for their installation in your neighborhood.
                </p>
                <p className="text-sm text-medium-gray">
                  <strong>Cost:</strong> $5,000 per station | <strong>Effectiveness:</strong> 30% PM2.5 reduction
                </p>
              </div>
              <div className="bg-moss-green p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-forest-green mb-4">How Misting Works</h3>
                <div className="space-y-3 text-medium-gray">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-forest-green rounded-full mr-3"></div>
                    <span>Water droplets capture airborne particles</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-forest-green rounded-full mr-3"></div>
                    <span>Particles fall to ground with water</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-forest-green rounded-full mr-3"></div>
                    <span>Cleaner air for pedestrians</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Building Filtration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-forest-green mr-3" />
                  <h2 className="text-2xl font-bold text-forest-green">Advocate for Filtration Towers</h2>
                </div>
                <p className="text-medium-gray mb-4">
                  Large-scale air purification towers can clean the air for entire neighborhoods. 
                  Support city initiatives to install these in high-pollution areas.
                </p>
                <blockquote className="bg-moss-green p-4 rounded-2xl mb-4">
                  <p className="italic text-forest-green">
                    "Air purification towers have shown remarkable effectiveness in reducing urban air pollution."
                  </p>
                  <p className="text-sm text-medium-gray">— Professor David Pui</p>
                </blockquote>
                <p className="text-sm text-medium-gray">
                  <strong>Cost:</strong> $25M install, $2M/year maintenance | <strong>Effectiveness:</strong> 50% PM2.5 reduction
                </p>
              </div>
              <div className="bg-moss-green p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-forest-green mb-4">Success Stories</h3>
                <div className="space-y-3 text-medium-gray">
                  <div>
                    <strong>Delhi, India:</strong> 30% reduction in PM2.5 levels
                  </div>
                  <div>
                    <strong>Xi'an, China:</strong> 40% improvement in air quality
                  </div>
                  <div>
                    <strong>Los Angeles:</strong> Pilot program shows 25% reduction
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Green Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Trees className="w-8 h-8 text-forest-green mr-3" />
                  <h2 className="text-2xl font-bold text-forest-green">Plant Green Spaces</h2>
                </div>
                <p className="text-medium-gray mb-4">
                  Trees and plants naturally filter air pollutants. Organize local initiatives to 
                  plant trees, create community gardens, and support urban greening projects.
                </p>
                <p className="text-sm text-medium-gray">
                  <strong>Cost:</strong> $50-200 per tree | <strong>Effectiveness:</strong> 15% PM2.5 reduction
                </p>
              </div>
              <div className="bg-moss-green p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-forest-green mb-4">Get Involved</h3>
                <div className="space-y-3 text-medium-gray">
                  <div>• Join NYC Parks tree planting events</div>
                  <div>• Start a community garden</div>
                  <div>• Advocate for rooftop gardens</div>
                  <div>• Support green infrastructure projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Indoor Air Filtration Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="card mb-12"
          >
            <div className="text-center mb-8">
              <Filter className="w-16 h-16 text-forest-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-forest-green mb-4">Indoor Air Filtration Guidance</h2>
              <p className="text-xl text-medium-gray max-w-3xl mx-auto">
                Expert recommendations from leading air quality agencies to protect your indoor environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Agency Recommendations */}
              <div>
                <h3 className="text-xl font-semibold text-forest-green mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Agency Recommendations
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-forest-green mb-2">Building Sealing</h4>
                    <p className="text-medium-gray text-sm">
                      Keep doors and windows closed during high-pollution events. Use recirculation mode on air conditioning systems to prevent outdoor air infiltration.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-forest-green mb-2">HVAC Filtration</h4>
                    <p className="text-medium-gray text-sm">
                      Use HEPA filters, ideally MERV-13 or better, for HVAC units. These filters can capture up to 99.97% of particles as small as 0.3 microns.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-forest-green mb-2">Standalone Air Purifiers</h4>
                    <p className="text-medium-gray text-sm">
                      Run standalone air purifiers with CADR (Clean Air Delivery Rate) appropriate for your room size. Look for units with HEPA filtration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Tips */}
              <div>
                <h3 className="text-xl font-semibold text-forest-green mb-4 flex items-center">
                  <Wind className="w-6 h-6 mr-2" />
                  Additional Protection Tips
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-700 mb-2">Avoid Indoor Combustion</h4>
                    <p className="text-medium-gray text-sm">
                      Steer clear of candles, fireplaces, and other indoor combustion sources during poor air quality periods, as they worsen indoor air quality.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Monitor Air Quality</h4>
                    <p className="text-medium-gray text-sm">
                      Use air quality monitors to track indoor PM2.5 levels and adjust filtration accordingly.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Regular Maintenance</h4>
                    <p className="text-medium-gray text-sm">
                      Replace filters regularly according to manufacturer recommendations and clean air purifiers as directed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agency Sources */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-forest-green mb-3">Sources & Agencies</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-forest-green">CARB</div>
                  <div className="text-medium-gray">California Air Resources Board</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-forest-green">AQMD</div>
                  <div className="text-medium-gray">Air Quality Management District</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-forest-green">EPA</div>
                  <div className="text-medium-gray">Environmental Protection Agency</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-forest-green mb-6">Take Action Now</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/infographic.png"
                download
                className="btn-primary inline-flex items-center"
              >
                <Download className="mr-2" />
                Download Infographic
              </a>
              <button className="btn-secondary inline-flex items-center">
                <Share2 className="mr-2" />
                Share on Social Media
              </button>
              <button className="btn-secondary inline-flex items-center">
                <Mail className="mr-2" />
                Sign Up to Stay Informed
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TakeAction; 