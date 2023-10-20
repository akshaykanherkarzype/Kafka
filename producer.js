const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka producer is ready');

  // Send a message to a Kafka topic
  const payloads = [{ topic: 'test-topic', messages: 'Hello, Kafka!' }];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Error sending message:', err);
    } else {
      console.log('Message sent:', data);
    }
  });
});

producer.on('error', (err) => {
  console.error('Kafka producer error:', err);
});
