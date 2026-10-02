export const getStatus = (req, res) => {
    res.json({
        status: 'online',
        uptimeSeconds: Math.round(process.uptime()),
        timestamp: new Date().toISOString()
    });
};

export const getServerInfo = (req, res) => {
    res.json({
        platform: process.platform,
        arch: process.arch,
        uptimeSeconds: Math.round(process.uptime())
    });
};
export const getTime = (req, res) => {
    const now = new Date();
    res.json({
        iso: now.toISOString(),
        unixMs: now.getTime(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        local: now.toString()
    });
};