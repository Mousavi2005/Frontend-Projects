export default function ComplexDashboardLayout({
    children,
    notifications,
    users,
    revenue,
  }: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
  }) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '1rem' }}>
        <div>{children}</div>
        <aside>{notifications}</aside>
        <main>{revenue}</main>
        <section>{users}</section>
      </div>
    );
  }
  