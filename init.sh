#!/bin/bash
# Using Precise32 Ubuntu

sudo apt-get update
#
# For PHP 5.5
#
sudo apt-get install -y python-software-properties
sudo add-apt-repository ppa:ondrej/php5
sudo apt-get update

#
# MySQL with root:<no password>
#
export DEBIAN_FRONTEND=noninteractive
apt-get -q -y install mysql-server

#
# PHP
#
sudo apt-get install -y php5 php5-dev apache2 libapache2-mod-php5 php5-mysql php5-curl php5-mcrypt libpcre3-dev php5-xdebug

sudo apt-get -y autoremove;

sudo php5enmod xdebug
#sudo -i cat 'xdebug.remote_enable = on' >>  /etc/php5/mods-available/xdebug.ini
#sudo -i cat 'xdebug.remote_connect_back = on' >> /etc/php5/mods-available/xdebug.ini
#sudo -i cat 'xdebug.idekey = "vagrant"' >> /etc/php5/mods-available/xdebug.ini
#
sudo echo '
zend_extension=xdebug.so
xdebug.default_enable = 1
xdebug.idekey = "vagrant"
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
xdebug.remote_port = 9000
xdebug.remote_handler=dbgp
xdebug.remote_log="/var/log/xdebug/xdebug.log"
xdebug.remote_host=10.0.2.2 ; IDE-Environments IP, from vagrant box.'> /etc/php5/mods-available/xdebug.ini

#
# Utilities
#
sudo apt-get install -y make curl htop git-core vim

#
# MySQL Configuration
# Allow us to Remote from Vagrant with Port
#
sudo cp /etc/mysql/my.cnf /etc/mysql/my.bkup.cnf
# Note: Since the MySQL bind-address has a tab cahracter I comment out the end line
sudo sed -i 's/bind-address/bind-address = 0.0.0.0#/' /etc/mysql/my.cnf
#
# Grant All Priveleges to ROOT for remote access
#
mysql -u root -Bse "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;"
sudo service mysql restart
sudo mysql --user=root --execute="source /vagrant/database.sql";
#
# Composer for PHP
#
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
#sudo -i cat 'xdebug.remote_enable = on' >>  /etc/php5/mods-available/xdebug.ini
#sudo -i cat 'xdebug.remote_connect_back = on' >> /etc/php5/mods-available/xdebug.ini
#sudo -i cat 'xdebug.idekey = "vagrant"' >> /etc/php5/mods-available/xdebug.ini
#


#
# Apache VHost
#
cd ~
echo '<VirtualHost *:80>
        DocumentRoot /vagrant/public
        ServerPath /vagrant
        ServerName appply.dev
</VirtualHost>

<Directory "/vagrant/public">
        Options Indexes Followsymlinks
        AllowOverride All
        Require all granted
</Directory>' > vagrant.conf

sudo mv vagrant.conf /etc/apache2/sites-available
sudo a2enmod rewrite

#
# Install PhalconPHP
# Enable it
#
sudo apt-add-repository ppa:phalcon/stable
sudo apt-get update
sudo apt-get install -y php5-phalcon
sudo php5enmod phalcon
sudo php5enmod curl
sudo php5enmod mcrypt

#
# Update PHP Error Reporting
#
sudo sed -i 's/short_open_tag = Off/short_open_tag = On/' /etc/php5/apache2/php.ini
sudo sed -i 's/error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT/error_reporting = E_ALL/' /etc/php5/apache2/php.ini
sudo sed -i 's/display_errors = Off/display_errors = On/' /etc/php5/apache2/php.ini 
# Append session save location to /tmp to prevent errors in an odd situation..
sudo sed -i '/\[Session\]/a session.save_path = "/tmp"' /etc/php5/apache2/php.ini

#
#PHPUnit
#
wget https://phar.phpunit.de/phpunit.phar
chmod +x phpunit.phar
sudo mv phpunit.phar /usr/local/bin/phpunit
#
# Install PhalconPHP DevTools
#
cd ~
echo '{"require": {"phalcon/devtools": "dev-master"}}' > composer.json
composer install
rm composer.json

sudo mkdir /opt/phalcon-tools
sudo mv ~/vendor/phalcon/devtools/* /opt/phalcon-tools
sudo ln -s /opt/phalcon-tools/phalcon.php /usr/bin/phalcon
sudo rm -rf ~/vendor

#
# Reload apache
#
sudo a2ensite vagrant
sudo a2dissite 000-default
sudo service apache2 reload
sudo service apache2 restart
sudo service mongodb restart
echo -e "------------------DONE-----------------------";
echo -e "brought you by:Denzyl Dick<denzyl@live.nl>";