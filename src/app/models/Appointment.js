module.exports = (sequilize, DataTypes) => {
  const Appointment = sequilize.define('Appointment', {
    date: DataTypes.DATE
  })
  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
  }
  return Appointment
}
