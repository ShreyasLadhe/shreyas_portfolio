import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [expandedCompany, setExpandedCompany] = useState(null);

  // --- Cross-browser safe date parser ---
  const parseDate = (str) => {
    if (!str || str.trim() === "" || str === "Present") return new Date();

    const [monthStr, yearStr] = str.split(" ");
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };

    const month = months[monthStr];
    const year = parseInt(yearStr);

    if (isNaN(month) || isNaN(year)) {
      console.warn("Invalid date string:", str);
      return new Date(); // fallback
    }

    return new Date(year, month, 1);
  };

  // --- Duration calculator ---
  const calculateDuration = (dateString) => {
    const [startStr, endStr] = dateString.split(" - ");
    const startDate = parseDate(startStr);
    const endDate = parseDate(endStr);

    const monthsDiff =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) + 1;

    if (monthsDiff <= 0) return "0 mos"; // guard

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    if (years > 0 && months > 0) {
      return `${years} yr ${months} mos`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${months} mos`;
    }
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, expandedCompany]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const toggleCompany = (companyIndex) => {
    setExpandedCompany(expandedCompany === companyIndex ? null : companyIndex);
  };

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>

      {/* Added spacing after title */}
      <div className="h-16"></div>

      <div className="relative pb-20">
        <div ref={ref} className="space-y-12 ml-16">
          {data.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
              className="relative group"
            >
              {/* Polymorphic Company Card with Enhanced Design */}
              <div className="relative overflow-hidden">
                {/* Background with Polymorphic Shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-3xl border border-slate-600/30 group-hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-xl"></div>
                
                {/* Main Card Content */}
                <div className="relative p-8">
                  {/* Company Header with Enhanced Styling */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-6">
                      {/* Enhanced Company Logo with Glow Effect */}
                      <div className="relative">
                        <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-2xl blur-xl animate-pulse"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl border border-slate-600/50 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                          {company.logo ? (
                            <>
                              <img 
                                src={company.logo} 
                                alt={company.company} 
                                className="w-16 h-16 object-contain max-w-full max-h-full"
                                style={{
                                  minWidth: '64px',
                                  minHeight: '64px',
                                  maxWidth: '64px',
                                  maxHeight: '64px'
                                }}
                                onError={(e) => {
                                  console.log(`Failed to load logo for ${company.company}:`, company.logo);
                                  // Fallback to initials if image fails to load
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                                onLoad={() => {
                                  console.log(`Successfully loaded logo for ${company.company}:`, company.logo);
                                }}
                              />
                              <span 
                                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                style={{display: 'none'}}
                              >
                                {company.company.charAt(0)}
                              </span>
                            </>
                          ) : (
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                              {company.company.charAt(0)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                          {company.company}
                        </h3>
                        <div className="flex items-center gap-4 text-slate-300">
                          <span className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-600/50 backdrop-blur-sm">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {company.location}
                          </span>
                          
                          {/* Total Experience Chip */}
                          <span className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm">
                            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {(() => {
                              // Calculate total experience from all roles using calculated durations
                              const totalMonths = company.roles.reduce((total, role) => {
                                const calculatedDuration = calculateDuration(role.date);
                                if (calculatedDuration.includes('yr')) {
                                  const years = parseInt(calculatedDuration.match(/(\d+)/)?.[1] || 0);
                                  const months = calculatedDuration.includes('mos') ? 
                                    parseInt(calculatedDuration.match(/(\d+) mos/)?.[1] || 0) : 0;
                                  return total + (years * 12) + months;
                                } else if (calculatedDuration.includes('mos')) {
                                  const months = parseInt(calculatedDuration.match(/(\d+)/)?.[1] || 0);
                                  return total + months;
                                }
                                return total;
                              }, 0);
                              
                              // Convert back to years and months
                              const years = Math.floor(totalMonths / 12);
                              const months = totalMonths % 12;
                              
                              if (years > 0 && months > 0) {
                                return `${years} yr ${months} mos`;
                              } else if (years > 0) {
                                return `${years} yr`;
                              } else {
                                return `${months} mos`;
                              }
                            })()}
                          </span>
                          
                          {company.remote && (
                            <span className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full border border-green-500/30 backdrop-blur-sm">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              Remote
                            </span>
                          )}
                        </div>
                </div>
              </div>

                    {/* Enhanced Expand/Collapse Button */}
                    <button
                      onClick={() => toggleCompany(companyIndex)}
                      className="relative p-3 rounded-2xl bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 group/btn border border-slate-500/30 hover:border-slate-400/50 backdrop-blur-sm"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <motion.svg
                        className="relative w-6 h-6 text-slate-300 group-hover/btn:text-white transition-colors duration-200"
                        animate={{ rotate: expandedCompany === companyIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                  </div>

                  {/* Enhanced Roles Preview with Glassmorphism - Hidden when expanded */}
                  <AnimatePresence>
                    {expandedCompany !== companyIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-4"
                      >
                        {company.roles.slice(0, 2).map((role, roleIndex) => (
                          <motion.div 
                            key={roleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                            className="relative group/role"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-2xl border border-slate-600/30 group-hover/role:border-cyan-400/60 backdrop-blur-sm transition-all duration-300"></div>
                            <div className="relative p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h4 className="font-bold text-white mb-2 text-lg group-hover/role:text-blue-300 transition-colors duration-300">
                                    {role.title}
                                  </h4>
                                  <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <span className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-full">
                                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                      </svg>
                                      {role.date}
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                                      {calculateDuration(role.date)}
                                    </span>
                                    {role.isCurrent && (
                                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-200 rounded-full text-sm font-semibold border-2 border-blue-400/50 shadow-lg animate-pulse">
                                        <span className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                                          Current
                                        </span>
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        
                        {company.roles.length > 2 && (
                          <div className="text-center">
                            <span className="text-slate-400 text-sm px-4 py-2 bg-slate-800/30 rounded-full border border-slate-600/30">
                              +{company.roles.length - 2} more roles
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Enhanced Expanded Roles Section */}
                  <AnimatePresence>
                    {expandedCompany === companyIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-slate-600/50 space-y-6">
                          {company.roles.map((role, roleIndex) => (
                            <motion.div
                              key={roleIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                              className="relative group/expanded"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-2xl border border-slate-600/20 group-hover/expanded:border-cyan-400/60 transition-all duration-300"></div>
                              <div className="relative p-6">
                                {/* Role Header */}
                                <div className="flex items-start justify-between mb-5">
                                  <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover/expanded:text-blue-300 transition-colors duration-300">
                                      {role.title}
                                    </h4>
                                    <div className="flex items-center gap-3 text-slate-300 mb-4">
                                      <span className="flex items-center gap-2 px-3 py-1 bg-slate-700/50 rounded-full border border-slate-600/30">
                                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {role.date}
                                      </span>
                                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                                        {calculateDuration(role.date)}
                                      </span>
                                      {role.isCurrent && (
                                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-200 rounded-full text-sm font-semibold border-2 border-blue-400/50 shadow-lg animate-pulse">
                                          <span className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                                            Current
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Role Content with Enhanced Bullets */}
                                <div className="space-y-4 mb-5">
                                  {role.contents.map((content, contentIndex) => (
                                    <motion.p
                                      key={contentIndex}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: contentIndex * 0.05 }}
                                      className="text-slate-300 leading-relaxed flex items-start gap-4 group/bullet"
                                    >
                                      <span className="relative w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/bullet:scale-125 transition-transform duration-200">
                                        <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
                                      </span>
                                      {content}
                                    </motion.p>
                                  ))}
                                </div>

                                {/* Enhanced Skills with Hover Effects */}
                                {role.skills && role.skills.length > 0 && (
                                  <div className="flex flex-wrap gap-3">
                                    {role.skills.map((skill, skillIndex) => (
                                      <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 rounded-full text-xs border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/40 transition-all duration-200 cursor-default group/skill"
                                      >
                                        <span className="group-hover/skill:text-blue-200 transition-colors duration-200">
                                          {skill}
                                        </span>
                                      </motion.span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};