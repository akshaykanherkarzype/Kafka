const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(client, [{ topic: 'test-topic', partition: 0 }]);

consumer.on('message', (message) => {
  console.log('Received message:', message.value);
});

consumer.on('error', (err) => {
  console.error('Kafka consumer error:', err);
});
